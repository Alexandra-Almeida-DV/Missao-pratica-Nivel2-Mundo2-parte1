{
    for (let last = items.length - 1, last;  > 0; last--) {
        for (let i = 0; i < last; i++) {
            if (items[i] > items[i + 1]) {
                [items[i], items[i + 1]] = [items[i + 1], items[i]];
            }
        }
    }
    return items;
}
