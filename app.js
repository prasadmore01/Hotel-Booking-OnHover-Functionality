let card = document.querySelectorAll('#price')
card.forEach((data)=>{
    data.addEventListener('mouseover',(c)=>{
        let priceInc = data.dataset.price;
        let priceInNo = Number(priceInc)
        let incPercent = (priceInNo + (10/100*priceInNo))
        
        // let updatedPrice = document.getElementById('price')
       
        
        setTimeout(()=>{
            c.target.innerText = incPercent
        },10000)
        


      
    })
})


let rentOut = document.querySelectorAll('#avail')
rentOut.forEach((item)=>{
    item.addEventListener('mouseover',(p)=>{

        setTimeout(()=>{
            let availablity = document.getElementById('avail')
            p.target.innerText='Rent Out'
            p.target.style.color = 'red'
        },1000)
    })
})




