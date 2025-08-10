let cont = document.querySelector(".container");
let inpSize = document.querySelector("#size");
let body = document.querySelector("body");
let h4 = document.querySelector("h4");
let ht = document.querySelector("#headTag");
let btn = document.createElement("button");
let h = document.createElement("h1");
let spdInp = document.createElement("input");
let btnPlay = document.createElement("button");
let arr = [[0,11,16,5,20],[17,4,19,10,15],[12,1,8,21,6],[3,18,23,14,9],[24,13,2,7,22]];
let n = 0;
function getN(){
    return new Promise((resolve) => {
        inpSize.addEventListener("keydown",(e)=>{
            if(e.key==="Enter"){
                const key = Number(inpSize.value);
                inpSize.style.display="none";
                btn.classList.add("reset");
                btn.innerText="RESET";
                btn.style.marginLeft="1rem"; 
                btn.style.borderRadius="1rem"; 
                btn.style.display="inline";
                btn.style.backgroundColor="white";
                btn.style.fontSize="20px";
                h4.insertAdjacentElement("afterend",btn);
                resolve(key);
            }
        });
    });
}
async function choice() {
    let btn1 = document.createElement("button");
    let btn2 = document.createElement("button");
    btn1.innerText="want predefined";
    btn2.innerText="No";
     btn1.style.backgroundColor="white";
     btn2.style.backgroundColor="white";
    btn1.style.fontSize="20px";
    btn2.style.fontSize="20px";
    btn2.style.marginLeft="0.5rem";
    console.log(h);
    ht.insertAdjacentElement("afterend",btn1);
    btn1.insertAdjacentElement("afterend",btn2);
    return new Promise((resolve, reject) => {
        btn1.addEventListener("click",()=>{
            btn1.remove();
            btn2.remove();
            resolve();
        });
        btn2.addEventListener("click",()=>{
            btn1.remove();
            btn2.remove();
            reject();
        });
    })
}
async function getNum(){
    let c=false;
    await choice()
    .then(
        ()=>{
             btn.classList.add("reset");
                btn.innerText="RESET";
                btn.style.marginLeft="1rem"; 
                btn.style.borderRadius="1rem"; 
                btn.style.display="inline";
            btn.style.backgroundColor="white";
              btn.style.fontSize="20px";
                h4.insertAdjacentElement("afterend",btn);
            n=5;
            c=true;
        }
    )
    .catch(async ()=>{
        h4.style.display="inline";
        inpSize.style.display="inline";
        n=await getN();   
        h4.style.display="none";
    })
    if(n>8 || n<=0){
        cont.style.display="none";
         h.innerText="Enter less than 9 and greater than 0";
        body.appendChild(h);
    }else{
    console.log(n);
    cont.style.margin=`${16/n}vh auto`;
    cont.style.display="grid";
    cont.style.width=`${n*4}rem`;
    cont.style.height=`${n*4}rem`;
cont.style.gridTemplateRows=`repeat(${n},1fr)`;
cont.style.gridTemplateColumns=`repeat(${n},1fr)`;
for(let i=0;i<n;i++){
    for(let j=0;j<n;j++){
        let itm = document.createElement("div");
        let inp = document.createElement("input");
        inp.style.length="30px";
        inp.style.width="30px";
        inp.style.backgroundColor="grey";
        inp.placeholder="N";
        if(!c){
            itm.appendChild(inp);
        }
        itm.classList.add("item");
        if((i+j)%2==0){
            itm.style.backgroundColor="black";
        }else{
            itm.style.backgroundColor="white";
        }
        cont.appendChild(itm);
    }
}  
    {
        let child = document.querySelectorAll(".container > div");
        let i = 1;
        if(c){
            let r=0,c=0;
            for(cld of child){
                if(c>=n){
                    r++;
                    c=0;
                }
                cld.textContent=Number(arr[r][c]+1);
                c++;
                cld.classList.add(`num-${i}`);
                i++;
                cld.style.color="red";
            }
        }else{
            child[0].textContent=Number(1);
             child[0].classList.add(`num-${i}`);
              i++;
               child[0].style.color="red";
            for(cld of Array.from(child).slice(1)){
            let inp = cld.querySelector("input");
            inp.focus();
            async function takeinputs() {
                return new Promise((resolve) => {
                    inp.addEventListener("keydown",(e)=>{
                         if(e.key==="Enter"){
                const num = Number(inp.value);
                inp.style.display="none";
              cld.classList.add(`num-${i}`);
              i++;
              cld.textContent=num;
              cld.style.color="red";
                resolve(n);
            }
                    });
                });
            }
            await takeinputs();
        }
        }
        let rstbtn = document.querySelector(".reset");
    btnPlay.classList.add("playButton")
    btnPlay.innerText="PLAY";
    btnPlay.style.marginLeft="1rem"; 
    btnPlay.style.borderRadius="1rem"; 
    btnPlay.style.display="block";
    btnPlay.style.backgroundColor="white";
          btnPlay.style.fontSize="20px";
    btnPlay.style.marginTop="1rem";
    console.log(btnPlay);
    console.log(rstbtn);
    rstbtn.insertAdjacentElement("afterend",btnPlay);
    }
     
    
    btnPlay.addEventListener("click",async ()=>{
         async function horseplay(i,j){
let num = `${(n*i)+j+1}`;
       let currPos = document.querySelector(`.num-${num}`);
       console.log(currPos);
       let txt = currPos.textContent;
       currPos.textContent="";
       currPos.style.backgroundImage = "url('./horse.png')";
        currPos.style.backgroundSize = "cover";
       currPos.style.backgroundPosition = "center";
       await new Promise(resolve=> setTimeout(resolve,500));
       currPos.textContent = txt;
    currPos.style.backgroundImage = "";
        }
        async function play(){  
            console.log("value of n is ",n);
        return new Promise((resolve, reject) => {
            function target(row,col,toFind){
        if(row<0 || row>=n || col>=n || col<0){
            return false;
        }
        let divNum = (row*n)+col+1;
        let thatDiv = document.querySelector(`.num-${divNum}`);
        if(thatDiv==null){
            return false;
        }
        if(Number(thatDiv.textContent)==toFind){
            return true;
        }
        return false;
    }
        async function knightTour(row,col,val){
        if(val==(n*n)){
            console.log("this is n",n,val);
            resolve();
        }
       if(target(row-2, col-1, val+1)){
        await horseplay(row-2,col-1);
        return knightTour(row-2,col-1,val+1);
       }
       if(target(row-2, col+1, val+1)){
        await horseplay(row-2,col+1);
        return knightTour(row-2,col+1,val+1);
       }
       if(target(row-1, col-2, val+1)){
        await horseplay(row-1,col-2);
        return knightTour(row-1,col-2,val+1);
       }
       if(target(row-1, col+2, val+1)){
        await horseplay(row-1,col+2);
        return knightTour(row-1,col+2,val+1);
       }
       if(target(row+1, col-2, val+1)){
        await horseplay(row+1,col-2);
        return knightTour(row+1,col-2,val+1);
       }
       if(target(row+1, col+2, val+1)){
        await horseplay(row+1,col+2);
        return knightTour(row+1,col+2,val+1);
       }
       if(target(row+2, col-1, val+1)){
        await horseplay(row+2,col-1);
        return knightTour(row+2,col-1,val+1);
       }
       if(target(row+2, col+1, val+1)){
        await horseplay(row+2,col+1);
     return knightTour(row+2,col+1,val+1);
       }
        reject("got to no point");
    }
        knightTour(0,0,1);
        })
    }
        if(document.querySelector(`.num-${1}`).textContent==1){
            btn.style.display="none";
            btnPlay.style.display="none";
            await horseplay(0,0);
             await play()
        .then(
            ()=>{
                let suc = document.createElement("h1");
                suc.classList.add("sucMsg");
                suc.innerText="VALID TOUR PRESS RESET TO ENTER AGAIN";
                suc.style.color="green";
                cont.style.display="none";
                body.appendChild(suc);
                console.log("success");
            }
    )
        .catch(
            (e)=>{
                let err = document.createElement("h1");
                err.classList.add("errorMsg");
                err.innerText="INVALID TOUR PRESS RESET";
                err.style.color="red";
                cont.style.display="none";
                body.appendChild(err);
                console.log(e);
            }
    )
    btn.style.display="inline";
    btn.style.display="inline";
        }else{
            console.log("please start the first column with 1");
        } 
    });

    
    }
}
btn.addEventListener("click", () => {
    let btnPlay = document.querySelector(".playButton");
    if(btnPlay!=null){
        btnPlay.remove();
    }
    let errMsgTag = document.querySelectorAll(".errorMsg");
    if(errMsgTag!=null){
        for(err of errMsgTag){
            err.remove();
        }
    }
    let sucMsg = document.querySelectorAll(".sucMsg");
    if(sucMsg!=null){
        for(suc of sucMsg){
            suc.remove();
        }
    }
    cont.innerHTML = ""; 
    inpSize.value = "";
    inpSize.style.display = "none";
    btn.style.display="none";
   h.remove();
   n=0;
    getNum();
});
getNum();






