export default function CurrentTime() {
    var currentdate = new Date(); 
    var datetime = 
                    currentdate.getHours() + ":"  
                    + currentdate.getMinutes() + ":" 
                    + currentdate.getSeconds() + ", "
                    + currentdate.getDate() + "."
                    + (currentdate.getMonth()+1)  + "." 
                    + currentdate.getFullYear() ;
    return <>{datetime}</>
}