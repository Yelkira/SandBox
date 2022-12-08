function abbrevName(name) {
    return name.toUpperCase().split(' ').map(el => el[0]).join('.')
}