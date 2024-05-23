 fetch("../data/bd.json")
 .then((response) => {
    return response.json();
    })
    .then((data) => {
        const tBody=document.querySelector("#tBody")
       init()

      


       function init() {
        tBody.innerHTML = generateTbody(data.apprenants)
       
    }
    function generateTbody(tabs) {
        let html = ""
        for (const tab of tabs) {
            html += generateTr(tab)
        }
        return html
    }
    
    
    function generateTr(tab) {
        return `<tr>
            <td> img</td>
            <td>${tab.nom}</td>
            <td>${tab.prenom}</td>
            <td>${tab.email}</td>
            <td>${tab.genre}</td>
            <td>${tab.telephone}</td>
            <td>actions</td>
            </tr>`
    }
    })



  