function setAll(store) {
  localStorage.setItem('highlights', JSON.stringify(store));
}

function clearAll() {
  setAll([]);
}

function getAll() {
  const highlights = localStorage.getItem('highlights');

  if (!highlights) {
    return [];
  }

  let parsedHighlights;

  try {
    parsedHighlights = JSON.parse(highlights);
  } catch (err) {
    console.error('Could not get highlights');
    clearAll();
    return [];
  }

  return parsedHighlights;
}

function save(highlight) {
  let highlights = getAll();
  if (!highlights) {
    highlights = [];
  }

  if (highlights.some(hl => hl.id === highlight.id)) {
    highlights.map(hl => (hl.id === highlight.id ? highlight : hl));
  } else {
    highlights.push(highlight);
  }

  setAll(highlights);
}

function remove(id) {
  let highlights = getAll();
  if (!highlights) {
    highlights = [];
  }
  setAll(highlights.filter(hl => hl.id !== id));
}

export { setAll, clearAll, getAll, save, remove };