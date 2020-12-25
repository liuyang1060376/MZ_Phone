<template>
  <div class="manager_list">
    <h2>我的服务</h2>
    <ul>
      <li>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAACYElEQVR4Xu3avy4EURgF8O8jGh5Bo9oZQ0KyWgoPoFJqRaKVKPQqrShW6QlUekpEw+ydjUIk3sCfwporwa7J2ow7ey5r1tl2vzMz+9sze2cGFb4gAYXSDAsBwRIQkICgABhnAwkICoBxNpCAoAAYZwMJCAqAcTaQgKAAGGcDCQgKgHE2kICgABhnA8sIGIXBmYhUW8eeis4ZY85dP0sUVeYl1eP2vJWTOEkWXPM+5/rSQAKCXyEBcwCjMNz61tfadVEZb81ZK3uqevdt7mNAJZ2woqvtvMiNiu7n5a21z/Uk2XHdh+uc91M4CgPruvNfnnuMTTLme58EBEUJ+OcBVbbBY+wpblMZUZXNTLicp3BsEu8tdxGtVqujTw/3DwR00eoyQ8Ae4VoxAhLwXYC/gQWb0HkhTUAC5gp4v8RwaeBUpTKTDn/eCxf8jrqMD9/W6/XL7BsDvYhEk8GBWFnB4dqPE2qxaawRsGdRS8Ce7d6C/w0wDDfE2kUMLZNWPYqN2f03p7A3uJwNDfQiQsAcAZfLGAISsC3QlwtpNpAN7G8DoyBYEtVppyY2m0fx9fWF02xmaKBX4WK3croWG1MjYEaAgOBvIAFRwCBYliGZdTkt9cUeXjUapy6zvJUrqsRbOY9iHZsa6FX459g+t0xAUJmABHwX4J81CzaBj7MKgnWOE5CAhQT4PLAQ19dhAv51QPD4fMbL+S++PgXAbRGQgKAAGC9HA8EPWbq491W4dALgAROQgKAAGGcDCQgKgHE2kICgABhnAwkICoBxNpCAoAAYZwMJCAqAcTaQgKAAGH8FsHI/by5QogAAAAAASUVORK5CYII=" alt="">
        <span>我的家人</span>
      </li>      <li>
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAACYElEQVR4Xu3avy4EURgF8O8jGh5Bo9oZQ0KyWgoPoFJqRaKVKPQqrShW6QlUekpEw+ydjUIk3sCfwporwa7J2ow7ey5r1tl2vzMz+9sze2cGFb4gAYXSDAsBwRIQkICgABhnAwkICoBxNpCAoAAYZwMJCAqAcTaQgKAAGGcDCQgKgHE2kICgABhnA8sIGIXBmYhUW8eeis4ZY85dP0sUVeYl1eP2vJWTOEkWXPM+5/rSQAKCXyEBcwCjMNz61tfadVEZb81ZK3uqevdt7mNAJZ2woqvtvMiNiu7n5a21z/Uk2XHdh+uc91M4CgPruvNfnnuMTTLme58EBEUJ+OcBVbbBY+wpblMZUZXNTLicp3BsEu8tdxGtVqujTw/3DwR00eoyQ8Ae4VoxAhLwXYC/gQWb0HkhTUAC5gp4v8RwaeBUpTKTDn/eCxf8jrqMD9/W6/XL7BsDvYhEk8GBWFnB4dqPE2qxaawRsGdRS8Ce7d6C/w0wDDfE2kUMLZNWPYqN2f03p7A3uJwNDfQiQsAcAZfLGAISsC3QlwtpNpAN7G8DoyBYEtVppyY2m0fx9fWF02xmaKBX4WK3croWG1MjYEaAgOBvIAFRwCBYliGZdTkt9cUeXjUapy6zvJUrqsRbOY9iHZsa6FX459g+t0xAUJmABHwX4J81CzaBj7MKgnWOE5CAhQT4PLAQ19dhAv51QPD4fMbL+S++PgXAbRGQgKAAGC9HA8EPWbq491W4dALgAROQgKAAGGcDCQgKgHE2kICgABhnAwkICoBxNpCAoAAYZwMJCAqAcTaQgKAAGH8FsHI/by5QogAAAAAASUVORK5CYII=" alt="">
      <span>我的客服</span>
    </li>      <li>
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAACYElEQVR4Xu3avy4EURgF8O8jGh5Bo9oZQ0KyWgoPoFJqRaKVKPQqrShW6QlUekpEw+ydjUIk3sCfwporwa7J2ow7ey5r1tl2vzMz+9sze2cGFb4gAYXSDAsBwRIQkICgABhnAwkICoBxNpCAoAAYZwMJCAqAcTaQgKAAGGcDCQgKgHE2kICgABhnA8sIGIXBmYhUW8eeis4ZY85dP0sUVeYl1eP2vJWTOEkWXPM+5/rSQAKCXyEBcwCjMNz61tfadVEZb81ZK3uqevdt7mNAJZ2woqvtvMiNiu7n5a21z/Uk2XHdh+uc91M4CgPruvNfnnuMTTLme58EBEUJ+OcBVbbBY+wpblMZUZXNTLicp3BsEu8tdxGtVqujTw/3DwR00eoyQ8Ae4VoxAhLwXYC/gQWb0HkhTUAC5gp4v8RwaeBUpTKTDn/eCxf8jrqMD9/W6/XL7BsDvYhEk8GBWFnB4dqPE2qxaawRsGdRS8Ce7d6C/w0wDDfE2kUMLZNWPYqN2f03p7A3uJwNDfQiQsAcAZfLGAISsC3QlwtpNpAN7G8DoyBYEtVppyY2m0fx9fWF02xmaKBX4WK3croWG1MjYEaAgOBvIAFRwCBYliGZdTkt9cUeXjUapy6zvJUrqsRbOY9iHZsa6FX459g+t0xAUJmABHwX4J81CzaBj7MKgnWOE5CAhQT4PLAQ19dhAv51QPD4fMbL+S++PgXAbRGQgKAAGC9HA8EPWbq491W4dALgAROQgKAAGGcDCQgKgHE2kICgABhnAwkICoBxNpCAoAAYZwMJCAqAcTaQgKAAGH8FsHI/by5QogAAAAAASUVORK5CYII=" alt="">
      <span>了解民众</span>
    </li>
      <li></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ServerManager"
}
</script>

<style lang="less">
@import "./../../assets/css/BaseFont";
.manager_list {
  width: 90%;
  margin: 40rem / @baseFont auto;
  height: 150rem / @baseFont;
  h2 {
    height: 50rem / @baseFont;
    line-height: 50rem / @baseFont;
    font-size: 25rem / @baseFont;
    margin-bottom: 10rem / @baseFont;
  }
  ul {
    display: flex;
    justify-content: space-around;
    height: 100rem / @baseFont;
    li {
      height: 100%;
      display: flex;
      width: 25%;
      justify-content: flex-start;
      flex-direction: column;
      align-items: center;
      img {
        width: 60rem / @baseFont;
        height: 60rem / @baseFont;
      }
    }
  }
}
</style>
