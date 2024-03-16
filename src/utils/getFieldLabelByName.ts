export function getFieldLabelByName(name: string) {
  const regex = /([a-z]+)([A-Z][a-z]+)/;
  const matches = name.match(regex);
  if (matches) {
    const arr = matches.slice(1);
    return arr.map(value => {
      return value[0].toUpperCase() + value.slice(1);
    }).join(' ');
  } else {
    return null;
  }
}