const multiplica = (param) => {
    let x = 0;
    for(i = 1; i < param; i++){
        if(i % 3 == 0 || i % 5 == 0){
            x = x + i
        }
    }
    console.log(x);
};

multiplica(1000);