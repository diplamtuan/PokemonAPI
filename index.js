function getPokemon(string) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${string}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data)
    })
    .catch((error) => {
      console.log(error);
    })
}

getPokemon('pikachu')

// Viết cho thầy tính năng search tìm kiếm tên pokemon
// Nếu tên tìm kiếm không có kết quả thì xuất lên element pokemonBox  là "Not found pokemon"
// Nếu tìm thấy thì hiển thị thông tin gồm : hình ảnh , tên và cân nặng của pokemon đó

// Gợi ý
// Dữ liệu của data là thông tin của pokemon Pikachu
// Biết tên của pokemon nằm ở key name trong data
// Biết hình ảnh của pokemon nằm ở key sprites và front_shiny_female của data
// Biết cân nặng nằm ở key weight của data
// Chúc các bạn hoàn thành tốt 
