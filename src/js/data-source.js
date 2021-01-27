const dataMusic = () => {
return fetch(`https://anitop.vercel.app/api/v1/music-chart`)
        .then(res => res.json())
        .then(result => result.data)
        .catch(err => console.log(err));
}

export default dataMusic;