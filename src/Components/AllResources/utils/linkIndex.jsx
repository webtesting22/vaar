function linkIndex(){
    let link = window.location.href;
    let linkArr = link.split("SingleResource");
    let data = linkArr[linkArr.length-1]
    return Number(data);
}

export default linkIndex;