var rangeslider = document.getElementById("atomD");
var output = document.getElementById("atomDval");
output.innerHTML = rangeslider.value;

rangeslider.oninput = function() {
    output.innerHTML = this.value;
}
var boxS = document.getElementById('boxS');
var simT = document.getElementById('simT');
var simS = document.getElementById('simS');
var atomD = document.getElementById('atomD');
var ctx = document.getElementById('myChart').getContext('2d');
var cnt = 0;
var cost=1000;
const data = {
    labels: ['0'],
    datasets: [{
        label: 'Time consumption',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0],
        // data: [atomD * boxS**3 * simT / simS, boxS.value],
    }]
};
var myChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
        scales: {
            x: {
                title: {
                    display: true,
                    font: {
                        size: 21
                    },
                    text: 'Number of simulation'
                }
            },
            y: {
                title: {
                    display: true,
                    font: {
                        size: 21
                    },
                    text: 'Cost of time'
                }
            }
        }
    }
});
function updateChart() {
    cnt += 1;
    cost = atomD.value * boxS.value**3 * simT.value / simS.value;

    // var updateValues = [boxS.value, simT.value, simS.value, atomD.value]
    myChart.data.datasets[0].data.push(cost);
    myChart.data.labels.push(cnt);
    myChart.update();
}
console.log(cost)
const threshold=500;
const energy=400;
if (cost<threshold) {
    var treeAni = document.getElementById("tree");
    var img2 = document.createElement("img");
    img2.src = "scripts/fulltree.gif";
    treeAni.appendChild(img2);
    var lifeAni = document.getElementById("life");
    var img4 = document.createElement("img");
    img4.src = "scripts/playing.gif";
    img4.style.width= "300px";
    lifeAni.appendChild(img4);
    var houseAni = document.getElementById("household");
    var img6 = document.createElement("img");
    img6.src = "scripts/fewhouse.gif";
    img6.style.width= "350px";
    houseAni.appendChild(img6);
}
else{
    var treeAni = document.getElementById("tree");
    var img1 = document.createElement("img");
    img1.src = "scripts/middletree.gif";
    treeAni.appendChild(img1);
    var lifeAni = document.getElementById("life");
    var img3 = document.createElement("img");
    img3.src = "scripts/working.gif";
    img3.style.width= "300px";
    lifeAni.appendChild(img3);
    var houseAni = document.getElementById("household");
    var img5 = document.createElement("img");
    img5.src = "scripts/manyhouses.gif";
    img5.style.width= "350px";
    houseAni.appendChild(img5);
}