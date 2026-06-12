import { useEffect,useState } from "react"

function ThemeToggle(){

const [dark,setDark]=
useState(false)


useEffect(()=>{

if(dark){

document.documentElement
.classList
.add("dark")

}

else{

document.documentElement
.classList
.remove("dark")

}

},[dark])


return(

<button

onClick={()=>

setDark(!dark)

}

className="
bg-black
text-white
dark:bg-white
dark:text-black
px-5
py-3
rounded-xl
font-medium
"

>

{

dark

?

"☀️ Light"

:

"🌙 Dark"

}

</button>

)

}

export default ThemeToggle