import { Link } from "react-router-dom"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import useStore from '@/stores/store';

const Header = () => {

  const cart = useStore((state) => state.cart); // Lấy dữ liệu giỏ hàng từ store

  // Tính tổng số lượng sản phẩm (kể cả trùng nhau)
  const totalItems = cart.reduce((total, product) => total + product.quantity, 0);

  // Tính tổng giá (kể cả trùng nhau)
  const totalPrice = cart.reduce((sum, product) => sum + (product.price * product.quantity), 0);

  return (
    <header className="bg-primary flex items-center h-[64px] shadow-lg fixed top-[0] z-10 w-full">
      <div className='container mx-auto flex justify-between'>
        <Link to='/' className="cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="166" height="32" viewBox="0 0 166 32" fill="none" className="text-white"><path fill="url(#finefoods-icon-a)" d="M0 14.667a8.002 8.002 0 0 0 6.901 7.925l-1.05 6.303A2.667 2.667 0 0 0 8.48 32h2.514c.694 0 1.272-.532 1.33-1.223l.628-7.547c.03-.36-.087-.717-.325-.989l-1.302-1.487a2.667 2.667 0 0 1-.66-1.756v-.809c0-.126.01-.25.032-.375.157-.867.955-4.48 3.302-4.48s3.145 3.613 3.302 4.48c.023.125.031.25.031.375v.809c0 .646-.234 1.27-.66 1.756l-1.3 1.487a1.333 1.333 0 0 0-.326.989l.629 7.547A1.333 1.333 0 0 0 17.005 32h3.324c.693 0 1.27-.532 1.328-1.223l.63-7.547c.03-.36-.088-.717-.326-.989l-1.301-1.487a2.667 2.667 0 0 1-.66-1.756V14a.667.667 0 0 1 1.333 0v4a.667.667 0 0 0 1.334 0v-4A.667.667 0 1 1 24 14v4a.667.667 0 0 0 1.333 0v-4a.667.667 0 0 1 1.334 0v4.998c0 .646-.235 1.27-.66 1.756l-1.301 1.487a1.333 1.333 0 0 0-.326.989l.63 7.547A1.333 1.333 0 0 0 26.337 32h2.514a2.667 2.667 0 0 0 2.63-3.105l-1.05-6.303a8.002 8.002 0 1 0-5-14.911c.606-.75 1.544-1.403 2.715-1.909A10.666 10.666 0 0 0 18.666 0a10.666 10.666 0 0 0-9.48 5.772c1.17.506 2.109 1.16 2.715 1.909a7.95 7.95 0 0 0-3.854-1.014H8a8.003 8.003 0 0 0-8 8Z"></path><path fill="currentColor" d="M103.819 11.094V8.265h-8.188v15.47h8.188v-2.83h-4.995v-3.469a8.425 8.425 0 0 1 1.574-.375 8.788 8.788 0 0 1 1.482-.089c.472.015.882.074 1.232.177l.205-.133v-2.718a7.61 7.61 0 0 0-1.437-.044c-.517.03-1.041.096-1.573.199a9.513 9.513 0 0 0-1.483.42v-3.78h4.995ZM90.239 8.265h3.125v15.47h-3.49l-3.946-9.592h-.251l.137 9.591h-3.125V8.266h3.49l3.946 9.724h.25l-.136-9.724ZM80.402 8.265H77.21v15.47h3.193V8.264ZM75.618 8.265v2.829h-4.95v4.177c.472-.177.966-.31 1.483-.398.532-.103 1.057-.17 1.574-.2a9.21 9.21 0 0 1 1.437.023v2.718l-.206.133a4.93 4.93 0 0 0-1.231-.177 8.796 8.796 0 0 0-1.483.088 8.426 8.426 0 0 0-1.574.376v5.9h-3.193V8.266h8.143ZM65.751 11.094V8.265h-8.189v15.47h8.19v-2.83h-4.996v-3.469a8.428 8.428 0 0 1 1.574-.375 8.794 8.794 0 0 1 1.482-.089 4.93 4.93 0 0 1 1.232.177l.205-.133v-2.718a7.61 7.61 0 0 0-1.437-.044c-.517.03-1.041.096-1.574.199a9.52 9.52 0 0 0-1.482.42v-3.78h4.995Z"></path><path fill="currentColor" fillRule="evenodd" d="M45.379 8.265h5.794c.912 0 1.718.177 2.417.53a3.802 3.802 0 0 1 1.688 1.57c.41.692.616 1.561.616 2.607 0 1.076-.228 1.974-.684 2.696a4.382 4.382 0 0 1-1.817 1.655l2.501 5.903v.509h-3.33l-2.15-5.923h-1.842v5.922h-3.239l.046-15.469Zm5.406 6.873h-2.213v-4.044h2.213c.365 0 .684.08.958.243.274.147.479.376.616.685.152.295.228.655.228 1.083 0 .398-.076.758-.228 1.083-.137.309-.342.545-.616.707a1.845 1.845 0 0 1-.958.243Z" clipRule="evenodd"></path><path fill="currentColor" d="M164.695 21.834c.425-.722.638-1.59.638-2.607 0-.708-.091-1.326-.273-1.857a4.113 4.113 0 0 0-.799-1.392 4.786 4.786 0 0 0-1.3-1.06l-1.232-.708a31.002 31.002 0 0 1-1.414-.862c-.319-.22-.479-.471-.479-.751 0-.236.084-.405.251-.508.167-.118.373-.177.616-.177.502 0 1.064.154 1.688.464a6.22 6.22 0 0 1 1.733 1.237h.525v-4.11a4.405 4.405 0 0 0-1.209-.818 5.973 5.973 0 0 0-1.505-.486 8.23 8.23 0 0 0-1.734-.177c-.882 0-1.695.184-2.441.553a4.303 4.303 0 0 0-1.756 1.635c-.426.722-.639 1.613-.639 2.674 0 .87.145 1.599.434 2.188.304.59.684 1.075 1.14 1.459.472.368.951.684 1.437.95l1.072.508c.502.265.86.486 1.072.663a.79.79 0 0 1 .343.685.605.605 0 0 1-.137.376.817.817 0 0 1-.342.287c-.152.074-.343.11-.571.11-.532 0-1.14-.162-1.824-.486a7.892 7.892 0 0 1-1.757-1.193h-.524v4.11c.213.162.555.361 1.026.597a8.27 8.27 0 0 0 1.665.597 7.669 7.669 0 0 0 2.053.265c.928 0 1.756-.184 2.486-.552a4.163 4.163 0 0 0 1.757-1.614Z"></path><path fill="currentColor" fillRule="evenodd" d="M148.07 8.265c1.247 0 2.372.28 3.376.84 1.004.545 1.802 1.385 2.395 2.52.593 1.134.89 2.592.89 4.375 0 1.768-.297 3.226-.89 4.375-.593 1.135-1.391 1.982-2.395 2.542-1.004.545-2.129.817-3.376.817h-4.699V8.266h4.699Zm-.045 11.47c.638 0 1.17-.325 1.596-.973.441-.663.662-1.584.662-2.762 0-1.208-.221-2.13-.662-2.763-.441-.648-.973-.972-1.596-.972h-.32v7.47h.32ZM129.748 11.425c-.623 1.179-.935 2.704-.935 4.575s.312 3.396.935 4.575c.624 1.178 1.445 2.047 2.464 2.607a6.858 6.858 0 0 0 3.284.818 6.771 6.771 0 0 0 3.285-.818c1.019-.56 1.84-1.429 2.463-2.607.624-1.18.936-2.704.936-4.575s-.312-3.396-.936-4.575c-.623-1.178-1.444-2.04-2.463-2.585a6.63 6.63 0 0 0-3.285-.84c-1.17 0-2.265.28-3.284.84-1.019.545-1.84 1.407-2.464 2.585Zm3.855 6.785c-.197-.604-.296-1.34-.296-2.21 0-.884.099-1.62.296-2.21.198-.604.464-1.053.799-1.348.334-.31.699-.464 1.094-.464.411 0 .784.155 1.118.464.335.295.601.737.798 1.326.213.59.32 1.333.32 2.232 0 .87-.107 1.606-.32 2.21-.197.59-.463 1.038-.798 1.348-.334.31-.707.464-1.118.464-.395 0-.76-.155-1.094-.464-.335-.31-.601-.759-.799-1.348ZM114.802 16c0-1.871.312-3.396.935-4.575.624-1.178 1.445-2.04 2.464-2.585a6.711 6.711 0 0 1 3.284-.84c1.186 0 2.281.28 3.285.84 1.019.545 1.84 1.407 2.463 2.585.624 1.179.936 2.704.936 4.575s-.312 3.396-.936 4.575c-.623 1.178-1.444 2.047-2.463 2.607a6.774 6.774 0 0 1-3.285.818 6.855 6.855 0 0 1-3.284-.818c-1.019-.56-1.84-1.429-2.464-2.607-.623-1.18-.935-2.704-.935-4.575Zm4.494 0c0 .87.099 1.606.296 2.21.198.59.464 1.038.799 1.348.334.31.699.464 1.094.464.411 0 .784-.155 1.118-.464.335-.31.601-.759.798-1.348.213-.604.32-1.34.32-2.21 0-.899-.107-1.643-.32-2.232-.197-.59-.463-1.031-.798-1.326-.334-.31-.707-.464-1.118-.464-.395 0-.76.155-1.094.464-.335.295-.601.744-.799 1.348-.197.59-.296 1.326-.296 2.21Z" clipRule="evenodd"></path><path fill="currentColor" d="M114.052 12.088V8.265h-8.348v15.47h4.334v-5.658a5.891 5.891 0 0 1 1.254-.243 5.735 5.735 0 0 1 1.118-.022c.365.015.692.066.981.155l.251-.133v-3.713a5.811 5.811 0 0 0-1.141-.022c-.395.03-.806.089-1.232.177a12.7 12.7 0 0 0-1.231.332v-2.52h4.014Z"></path><defs><linearGradient id="finefoods-icon-a" x1="18.667" x2="18.667" y1="0" y2="32" gradientUnits="userSpaceOnUse"><stop stopColor="currentColor"></stop><stop offset="1" stopColor="currentColor" stopOpacity="0.75"></stop></linearGradient></defs></svg></Link>

        <Dialog>
          <div className="flex items-center gap-[10px] text-white relative lg:static">
            <div className={`hidden lg:flex flex items-center justify-center gap-[0.3rem] transition-opacity duration-300 ease-in-out ${cart.length === 0 ? 'opacity-0' : 'opacity-1'}`}>
              Total:<span className="text-white text-[0.8rem] lg:text-lg font-bold text-gray-800">{totalItems} items / ${totalPrice}</span>
            </div>

            <div className="absolute lg:hidden bg-white rounded-full text-center text-primary font-semibold text-[9px] h-5 w-5 leading-[20px] absolute top-0 right-[-9px]">
              <span>{totalItems}</span>
            </div>

            <DialogTrigger asChild>
              <div className="cursor-pointer">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6"><path d="M19.5 7.313h-3.188v-.375a4.313 4.313 0 0 0-8.625 0v.375H4.5a.75.75 0 0 0-.75.75v12.562c0 .415.335.75.75.75h15a.75.75 0 0 0 .75-.75V8.062a.75.75 0 0 0-.75-.75ZM9.375 6.938A2.624 2.624 0 0 1 12 4.313a2.624 2.624 0 0 1 2.625 2.625v.375h-5.25v-.375Zm9.188 12.75H5.438V9h2.25v2.063c0 .103.084.187.187.187h1.313a.188.188 0 0 0 .187-.188V9h5.25v2.063c0 .103.084.187.188.187h1.312a.188.188 0 0 0 .188-.188V9h2.25v10.688Z" fill="#fff"></path></svg>
              </div>
            </DialogTrigger>
          </div>

          <DialogContent className="p-0 overflow-hidden text-white">
            <DialogHeader className="bg-primary p-2">
              <DialogTitle>
                <svg width="144" height="120" viewBox="0 0 144 120" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30.1929 119.969C29.2161 120.095 28.2288 119.832 27.4483 119.24C26.6678 118.648 26.158 117.775 26.031 116.813C25.904 115.85 26.1703 114.878 26.7712 114.109C27.3721 113.34 28.2585 112.838 29.2353 112.713C34.2216 111.383 39.3553 110.664 44.5202 110.572H85.0344C89.3464 110.712 93.5833 109.436 97.0782 106.943C100.43 104.367 104.15 101.174 108.128 97.7636C112.952 93.591 117.961 89.2731 122.602 85.935C123.081 85.5722 123.854 85.0279 124.333 84.6288C123.028 83.4211 121.386 82.6252 119.619 82.3429C117.312 82.0195 114.969 82.6063 113.1 83.9757C106.859 87.9301 100.869 92.2559 95.163 96.9291C94.5003 97.47 93.6664 97.7653 92.8058 97.7636H57.3743C56.3975 97.7636 55.4606 97.3813 54.7699 96.7009C54.0792 96.0204 53.6912 95.0975 53.6912 94.1352C53.6912 93.1729 54.0792 92.25 54.7699 91.5695C55.4606 90.8891 56.3975 90.5068 57.3743 90.5068H91.5904C97.2601 85.8922 103.213 81.6268 109.417 77.7348C112.729 75.5207 116.761 74.6022 120.724 75.1587C126.212 75.8843 132.215 80.1659 131.994 85.2093C131.732 86.5731 131.167 87.8627 130.339 88.9857C129.512 90.1087 128.441 91.0371 127.206 91.7042C122.713 94.9335 117.814 99.1787 113.1 103.243C109.048 106.689 105.255 109.991 101.719 112.676C96.937 116.138 91.1124 117.914 85.1818 117.72H44.6675C40.1496 117.81 35.6598 118.444 31.2979 119.607C30.9586 119.801 30.5825 119.924 30.1929 119.969Z" fill="white"></path><path d="M9.70372 98.9842C8.93473 98.9895 8.18341 98.7529 7.5554 98.3078C6.92739 97.8626 6.45428 97.2311 6.20259 96.5022C5.9509 95.7733 5.93329 94.9836 6.15223 94.2442C6.37118 93.5047 6.81567 92.8527 7.42321 92.3798C8.74738 91.3467 20.15 82.5285 23.1293 80.8313C24.8581 79.872 26.5133 78.8758 28.0214 77.8797C33.1419 74.7771 39.1486 73.4785 45.0885 74.19C50.4956 74.8911 56.9325 75.5183 63.1855 76.1086C68.7397 76.6621 73.926 77.1786 77.6043 77.6583C80.9678 77.9264 84.1083 79.4517 86.4039 81.932C88.6995 84.4124 89.9829 87.6671 90 91.0515V94.7411C90 95.7197 89.6125 96.6581 88.9227 97.3501C88.2329 98.042 87.2973 98.4307 86.3217 98.4307C85.3462 98.4307 84.4106 98.042 83.7208 97.3501C83.031 96.6581 82.6435 95.7197 82.6435 94.7411V91.0515C82.6344 89.4588 82.0071 87.9323 80.8946 86.7957C79.7822 85.6592 78.2721 85.002 76.6847 84.9637C73.0065 84.484 67.9305 84.0044 62.4499 83.4509C56.1601 82.8606 49.6863 82.2334 44.0586 81.4955C39.8698 81.0777 35.6572 82.0081 32.0307 84.152C30.3755 85.2588 28.3525 86.3288 26.6605 87.3988C24.9685 88.4688 16.5821 94.778 11.9475 98.4676C11.2739 98.8762 10.4875 99.0572 9.70372 98.9842Z" fill="white"></path><path d="M140.341 81H3.65854C2.68823 81 1.75767 80.6312 1.07156 79.9749C0.385452 79.3185 0 78.4283 0 77.5C0 76.5717 0.385452 75.6815 1.07156 75.0251C1.75767 74.3687 2.68823 74 3.65854 74H140.341C141.312 74 142.242 74.3687 142.928 75.0251C143.615 75.6815 144 76.5717 144 77.5C144 78.4283 143.615 79.3185 142.928 79.9749C142.242 80.6312 141.312 81 140.341 81Z" fill="white"></path><path d="M133.338 81H10.662C9.69076 81 8.75932 80.6123 8.07257 79.9221C7.38581 79.232 7 78.296 7 77.32C7 59.9961 13.8482 43.3817 26.0381 31.1318C38.2279 18.8819 54.7609 12 72 12C89.2391 12 105.772 18.8819 117.962 31.1318C130.152 43.3817 137 59.9961 137 77.32C137 78.296 136.614 79.232 135.927 79.9221C135.241 80.6123 134.309 81 133.338 81ZM14.4338 73.64H129.53C128.555 58.9692 122.068 45.2192 111.383 35.1746C100.698 25.13 86.6131 19.5419 71.9817 19.5419C57.3503 19.5419 43.2657 25.13 32.5807 35.1746C21.8956 45.2192 15.4087 58.9692 14.4338 73.64Z" fill="white"></path><path d="M31.6439 57.9994C31.0258 57.9981 30.4171 57.8497 29.8683 57.5667C29.4518 57.3372 29.0848 57.0283 28.7883 56.6576C28.4918 56.2869 28.2716 55.8617 28.1404 55.4063C28.0091 54.9509 27.9694 54.4742 28.0234 54.0035C28.0774 53.5328 28.2241 53.0773 28.4551 52.6631C32.9343 44.649 39.5404 38.0135 47.552 33.4812C47.966 33.2444 48.4228 33.0911 48.8963 33.03C49.3699 32.9689 49.8509 33.0013 50.3119 33.1251C50.7729 33.249 51.2048 33.462 51.5831 33.752C51.9614 34.042 52.2785 34.4033 52.5164 34.8152C52.7544 35.2272 52.9084 35.6817 52.9698 36.1529C53.0312 36.6241 52.9987 37.1027 52.8742 37.5614C52.7497 38.0201 52.5356 38.4499 52.2442 38.8263C51.9528 39.2026 51.5897 39.5182 51.1757 39.7549C44.3309 43.632 38.6896 49.3075 34.869 56.1605C34.5484 56.7283 34.0793 57.199 33.5115 57.5228C32.9436 57.8465 32.2983 58.0112 31.6439 57.9994Z" fill="white"></path><path d="M83.2961 19C82.3186 19 81.3812 18.6203 80.69 17.9444C79.9989 17.2685 79.6106 16.3517 79.6106 15.3958C79.6833 14.3749 79.5404 13.3503 79.1908 12.3856C78.8413 11.421 78.2925 10.537 77.5787 9.78867C76.8649 9.0403 76.0013 8.44356 75.0415 8.03555C74.0818 7.62753 73.0465 7.41698 72 7.41698C70.9535 7.41698 69.9182 7.62753 68.9585 8.03555C67.9987 8.44356 67.1351 9.0403 66.4213 9.78867C65.7074 10.537 65.1587 11.421 64.8092 12.3856C64.4596 13.3503 64.3167 14.3749 64.3894 15.3958C64.3894 16.3517 64.0011 17.2685 63.31 17.9444C62.6188 18.6203 61.6814 19 60.7039 19C59.7265 19 58.7891 18.6203 58.0979 17.9444C57.4067 17.2685 57.0184 16.3517 57.0184 15.3958C56.9177 13.4107 57.2306 11.4263 57.938 9.56302C58.6454 7.69975 59.7327 5.99651 61.1338 4.55669C62.5349 3.11688 64.2205 1.97052 66.0884 1.18722C67.9564 0.403913 69.9676 0 72 0C74.0324 0 76.0436 0.403913 77.9116 1.18722C79.7795 1.97052 81.4651 3.11688 82.8662 4.55669C84.2673 5.99651 85.3546 7.69975 86.062 9.56302C86.7694 11.4263 87.0823 13.4107 86.9816 15.3958C86.9816 16.3517 86.5933 17.2685 85.9021 17.9444C85.2109 18.6203 84.2735 19 83.2961 19Z" fill="white"></path></svg>
              </DialogTitle>
            </DialogHeader>

            <div className="p-4 text-black max-h-[60vh] overflow-scroll">
              {cart.map((product) => (
                <div className="flex items-center justify-between border-b p-1 pb-[15px]" key={product.id}>
                  <div className="flex items-center gap-2">
                    <img className="h-12 w-12 rounded-full object-cover object-center" src={product.images[0].url} alt="Coffee" />
                    <p>{product.name}</p> {/* Giả sử bạn có tên sản phẩm trong object product */}
                  </div>
                  <div className="flex-none">
                    <span className="font-semibold">${product.price}</span> {/* Giả sử bạn có giá sản phẩm trong object product */}
                    x {product.quantity} {/* Giả sử bạn có số lượng sản phẩm trong object product */}
                  </div>
                </div>
              ))}

              <DialogFooter className="mt-[4px] flex !flex-col items-end gap-4">
                <div className="flex items-center justify-center gap-2">Total:<span className="text-lg font-bold text-gray-800">{totalItems} items / ${totalPrice}</span></div>
                <button className="outline-none bg-primary border-primary rounded-md border px-4 text-lg font-bold text-white transition-all hover:bg-orange-500 active:scale-95">Order</button>
              </DialogFooter>
            </div>
          </DialogContent>
        </Dialog>

      </div>
    </header>
  )
}

export default Header
