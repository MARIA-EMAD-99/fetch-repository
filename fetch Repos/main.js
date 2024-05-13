let myinput = document.querySelector("input")
let mybutton = document.querySelector(".get-button")
let show = document.querySelector(".show-data")
console.log(mybutton)

function displayDate(){
    getRepos()
}

function getRepos(){
    if(myinput.value==""){
        show.innerHTML= "<span> please write Github user name</span>"
    }else{
        fetch(`https://api.github.com/users/${myinput.value}/repos`)
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            show.innerHTML="";
            data.forEach(ele => {
                let maindiv = document.createElement("div")
                let reponame = document.createTextNode(ele.name)
                maindiv.appendChild(reponame)
                let link = document.createElement("a")
                let linktext = document.createTextNode("visit")
                link.appendChild(linktext)
                link.href = `https://github.com/${myinput.value}/${ele.name}`
                link.setAttribute('target', '_blank')
                maindiv.appendChild(link)
                let stars = document.createElement("span")
                let starstext = document.createTextNode(`stars ${ele.stargazers_count}`)
                stars.appendChild(starstext)
                maindiv.appendChild(stars)
                maindiv.className='repobox'
                show.appendChild(maindiv)
            });
        })
    }
}