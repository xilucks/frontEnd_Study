// not ES6
function work1(onDone){
    setTimeout(() => onDone('작업1 완료!'),100);
}
function work2(onDone){
    setTimeout(() => onDone('작업2 완료!'),200);
}
function work3(onDone){
    setTimeout(() => onDone('작업2 완료!'),300);
}
function urgentWork(){
    console.log('긴급 작업');
}
work1(function (msg1){
    console.log('done after 100ms:'+msg1);
    work2(function(msg2){
        console.log('done after 300ms' + msg2);
        work3(function(msg3) {
            console.log('done after 600ms'+mg3);
        });
    });
});

urgentWork();
//ES6
const work1 = () => 
    new Promise(resolve => {
        setTimeout(() => resolve('작업 1 완료!'),100);
    });

const work2 = () => 
    new Promise(resolve => {
        setTimeout(() => resolve('작업2 완료!'),200);
    });
const work3 = () =>
    new Promise(resolve => {
        setTimeout(() => resolve('작업3 완료!'),300);
    });

function urgentWork(){
    console.log('긴급 작업');
}

const nextWorkOnDone = (msg1) => {
    console.log('done after 100ms:'+msg1);
    return work2();
};

work1()
    .then(nextWorkOnDone)
    .then((msg2) => {
        console.log('done after 200ms:' + msg2);
        return work3();
    })
    .then((msg3) => {
        console.log('done after 600ms' + msg3);
    });


urgentWork();