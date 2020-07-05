var p1 = new Promise((resolve, reject) => {
  const toLoad = `<h1 class="display-4">
    Welcome to A
  </h1>`;
  setTimeout(() => {
    document.getElementById("toLoad").innerHTML = toLoad;
    resolve(toLoad);
  }, 500);
});
var p2 = new Promise((resolve, reject) => {
  const toLoad = `<h1 class="display-4">
      Welcome to Am
    </h1>`;
  setTimeout(() => {
    document.getElementById("toLoad").innerHTML = toLoad;
    resolve(toLoad);
  }, 1000);
});
var p3 = new Promise((resolve, reject) => {
  const toLoad = `<h1 class="display-4">
      Welcome to Amu
    </h1>`;
  setTimeout(() => {
    document.getElementById("toLoad").innerHTML = toLoad;
    resolve(toLoad);
  }, 1500);
});
var p4 = new Promise((resolve, reject) => {
  const toLoad = `<h1 class="display-4">
      Welcome to Amus
    </h1>`;
  setTimeout(() => {
    document.getElementById("toLoad").innerHTML = toLoad;
    resolve(toLoad);
  }, 2000);
});
var p5 = new Promise((resolve, reject) => {
  const toLoad = `<h1 class="display-4">
      Welcome to Amusi
    </h1>`;
  setTimeout(() => {
    document.getElementById("toLoad").innerHTML = toLoad;
    resolve(toLoad);
  }, 2500);
});
var p6 = new Promise((resolve, reject) => {
  const toLoad = `<h1 class="display-4">
      Welcome to Amusic
    </h1>`;
  setTimeout(() => {
    document.getElementById("toLoad").innerHTML = toLoad;
    resolve(toLoad);
  }, 3000);
});
var p7 = new Promise((resolve, reject) => {
  const toLoad = `<h1 class="display-4">
      Welcome to Amusicf
    </h1>`;
  setTimeout(() => {
    document.getElementById("toLoad").innerHTML = toLoad;
    resolve(toLoad);
  }, 3500);
});

var p8 = new Promise((resolve, reject) => {
    const toLoad = `<h1 class="display-4">
        Welcome to Amusicfy
      </h1>`;
    setTimeout(() => {
      document.getElementById("toLoad").innerHTML = toLoad;
      resolve(toLoad);
    }, 4000);
  });
  var p9 = new Promise((resolve, reject) => {
    const toLoad = `<h1 class="display-4">
        Welcome to Amusicfy <img src="../assets/amusify.png" width=90px height=90px >
      </h1>`;
    setTimeout(() => {
      document.getElementById("toLoad").innerHTML = toLoad;
      resolve(toLoad);
    }, 4500);
  });

async function logoload() {
    await p1 ;await p2 ;await p3 ;await p4 ;await p5 ;await p6 ;await p7 ; await p8 ; await p9 ;
}