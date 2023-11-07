const leaflist = [1,2,3,4,5]

const leaf_container = document.getElementById("leaf_container")

for (const leafCard of leaflist){

    const leaf = document.createElement("div")
    leaf.setAttribute("id","leafZip"+leafCard)
    leaf.classList.add("leaf_"+leafCard)
    leaf_container.append(leaf)

    const innerleaf = document.createElement("div")
    innerleaf.classList.add("innerleaf_0"+leafCard)
    innerleaf.setAttribute("id","leafZip"+leafCard)
    leaf.append(innerleaf)

    const innerleaf2 = document.createElement("div")
    innerleaf2.classList.add("innerleaf_0"+leafCard+"_0"+leafCard)
    innerleaf2.setAttribute("id","leafZip"+leafCard)
    innerleaf.append(innerleaf2)

    const innerleaf3 = document.createElement("div")
    innerleaf3.classList.add("innerleaf_0"+leafCard+"_0"+leafCard+"_0"+leafCard)
    innerleaf3.setAttribute("id","leafZip"+leafCard)
    innerleaf2.append(innerleaf3)

}