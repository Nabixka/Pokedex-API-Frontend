function toPascalCase(str) {
    return str
        .toLowerCase()
        .split(/[\s\-_]+/)
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join('');
}

module.exports = { toPascalCase }