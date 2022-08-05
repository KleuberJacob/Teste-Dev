let value = 1;

const verify = () => {
    if(value % 2 == 0 && value % 3 == 0 && value % 10 == 0){
        return value;
    }else{
        value++;
        return verify();
    }    
};

console.log(verify());