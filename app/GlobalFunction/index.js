export function seperataURL(url){
    const startIndex = url?.indexOf('/wp-content');
    return  `https://willingly-superb-finch.ngrok-free.app/check-val${url?.substring(startIndex)}`;  
}