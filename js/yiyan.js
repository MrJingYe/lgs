// 本示例需要浏览器支持 Promise，fetch 以及 ES6 语法。
function fetch163Playlist(playlistId) {
    return new Promise((ok, err) => {
      fetch(`https://v1.hitokoto.cn/nm/playlist/${playlistId}`)
        .then(response => response.json())
        .then(data => {
          const arr = [];
          data.playlist.trackIds.forEach(function (value) { // 参考：https://neteasecloudmusicapi.vercel.app/#/?id=%e8%8e%b7%e5%8f%96%e6%ad%8c%e5%8d%95%e8%af%a6%e6%83%85
            arr.push(value.id);
          });
          return arr;
        })
        .then(fetch163Songs)
        .then(ok)
        .catch(err);
    });
  }
  
  function fetch163Songs(Ids) {
    return new Promise(function (ok, err) {
      let ids;
      switch (typeof Ids) {
        case 'number':
          ids = [Ids];
          break;
        case 'object':
          if (!Array.isArray(Ids)) {
            err(new Error('Please enter array or number'));
            return;
          }
          ids = Ids;
          break;
        default:
          err(new Error('Please enter array or number'));
          return;
          break;
      }  
      fetch(`https://v1.hitokoto.cn/nm/summary/${ids.join(',')}?lyric=true&common=true`)
        .then(response => response.json())
        .then(data => {
          var songs = [];
          data.songs.forEach(function (song) {
            songs.push({
              name: song.name,
              url: song.url,
              artist: song.artists.join('/'),
              album: song.album.name,
              pic: song.album.picture,
              lrc: song.lyric
            });
          });
          return songs;
        })
        .then(ok)
        .catch(err);
    });
  }
  