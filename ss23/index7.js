let a=prompt("Nhap vao 1 so bat ki");
let tong=0;
for(i=1; i<a;i++){
    if (a%i==0) {
        tong+=i;
    }
}if (tong==a) {
    console.log("La so hoan hao");
}else{
    console.log("kh phai so hoan hao");
}