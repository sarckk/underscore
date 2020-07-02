import { v4 as uuidv4 } from 'uuid';
import SelectionRange from '../model/SelectionRange';
import { getHighlightRanges } from './selection';
import { getCommonEnclosingElement } from './dom';

function highlightFromRange(selectionRange, color, id) {
  const HighlightSnippet = window.customElements.get('highlight-snippet');
  console.log('Custom element', HighlightSnippet);
  const uuid = id || uuidv4();
  const { highlightRanges } = selectionRange;

  highlightRanges.forEach(range => {
    const snippet = new HighlightSnippet(color, uuid);
    console.log('snippet', snippet);
    range.surroundContents(snippet);
  });

  return uuid;
}

function highlightFromStore({
  start,
  end,
  text,
  isBackwards,
  normalizeElemChanged,
  color,
  id
}) {
  const range = document.createRange();

  const startContainerParent = document.body.querySelectorAll(start.parentTag)[
    start.parentOffset
  ];

  const endContainerParent = document.body.querySelectorAll(end.parentTag)[
    end.parentOffset
  ];

  // now normalize the relevant parent so that we get the initial .childNodes when the highlight range was
  // serialized. This is done because when we are generating the highlights directly from store,
  // there is no normalizing done to get rid of the whitespace characters automatically put in by HTML
  // between inline elements (such as between our custom highlight-snippet element and anchor element)
  if (isBackwards) {
    startContainerParent.normalize();
    if (normalizeElemChanged) endContainerParent.normalize();
  } else {
    endContainerParent.normalize();
    if (normalizeElemChanged) startContainerParent.normalize();
  }

  const startContainer = startContainerParent.childNodes[start.textNodeOffset];
  const endContainer = endContainerParent.childNodes[end.textNodeOffset];

  range.setStart(startContainer, start.innerOffset);
  range.setEnd(endContainer, end.innerOffset);

  const commonEnclosingElement = getCommonEnclosingElement(range);
  const highlightRanges = getHighlightRanges(range, commonEnclosingElement);

  const selectionRange = new SelectionRange(
    range,
    highlightRanges,
    text,
    isBackwards,
    null
  );

  highlightFromRange(selectionRange, color, id);
}

export { highlightFromRange, highlightFromStore };