function show(e) {
    let p = e.children
    let d = p[1].children

    if (d[0].style.display==="none"){
        d[0].style.display="block"
    } else {
        d[0].style.display="none"
    }
}