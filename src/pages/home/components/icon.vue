<template>
    <div class="icons">
      <div class="icon" v-for="item in iconList" :key="item.id">
          <div class="icon-img">
              <img :src="item.imgUrl" class="iconimg-content">
          </div>
          <div class="icon-content">{{item.content}}</div>
      </div>
    </div>
</template>

<script>
export default {
    data (){
        return {
            iconList: [
                {
                    id: 0,
                    imgUrl: 'https://m1.tuniucdn.com/fb2/t1/G4/M00/91/EF/Cii_J1ne5feIWfxyAABbeRTPaQ4AACFywC3QukAAFuR40_w350_h0_c0_t0.jpeg',
                },
                {
                    id: 1,
                    imgUrl: 'https://m3.tuniucdn.com/fb2/t1/G4/M00/9F/7B/Cii-VVnmtkKIWJ8aAABSILrFxRoAACTKwP_Dk4AAFI415_w350_h0_c0_t0.jpeg',
                },
                {
                    id: 2,
                    imgUrl: 'https://m1.tuniucdn.com/fb2/t1/G4/M00/91/EF/Cii_J1ne5feIWfxyAABbeRTPaQ4AACFywC3QukAAFuR40_w350_h0_c0_t0.jpeg',
                },
                {
                    id: 3,
                    imgUrl: 'https://m3.tuniucdn.com/fb2/t1/G4/M00/9F/7B/Cii-VVnmtkKIWJ8aAABSILrFxRoAACTKwP_Dk4AAFI415_w350_h0_c0_t0.jpeg',
                },
                {
                    id: 4,
                    imgUrl: 'https://m1.tuniucdn.com/fb2/t1/G4/M00/91/EF/Cii_J1ne5feIWfxyAABbeRTPaQ4AACFywC3QukAAFuR40_w350_h0_c0_t0.jpeg',
                },
                {
                    id: 5,
                    imgUrl: 'https://m3.tuniucdn.com/fb2/t1/G4/M00/9F/7B/Cii-VVnmtkKIWJ8aAABSILrFxRoAACTKwP_Dk4AAFI415_w350_h0_c0_t0.jpeg',
                },
                {
                    id: 6,
                    imgUrl: 'https://m1.tuniucdn.com/fb2/t1/G4/M00/91/EF/Cii_J1ne5feIWfxyAABbeRTPaQ4AACFywC3QukAAFuR40_w350_h0_c0_t0.jpeg',

                },
                {
                    id: 7,
                    imgUrl: 'https://m3.tuniucdn.com/fb2/t1/G4/M00/9F/7B/Cii-VVnmtkKIWJ8aAABSILrFxRoAACTKwP_Dk4AAFI415_w350_h0_c0_t0.jpeg',
                }
            ]
        }
    }
}
</script>

<style lang="stylus" scoped>
  .icons {
      width: 100%;
      height: 0;
      padding-bottom: 53%;
      .icon {
          width: 25%;
          height: 0;
          padding-bottom: 25%;
          overflow: hidden;
          position: relative;
          float: left;
          margin: 0 auto;
          .icon-img {
              position: absolute;
              left: 0;
              top: 0;
              right: 0;
              .iconimg-content {
                  width: 100%;
              }
          }
      }
  }
</style>
