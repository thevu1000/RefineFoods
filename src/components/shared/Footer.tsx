import { Separator } from "../ui/separator";

const Footer = () => {
  return (
    <footer className="bg-primary">
      <div className="gap-[40px] container mx-auto py-[24px] md:px-10 flex flex-wrap items-center justify-between flex-col lg:flex-row">
        <div className="flex items-center gap-[10px] flex-col lg:flex-row w-full lg:w-auto">
          <div>
            <a className="transition-all hover:underline hover:underline-offset-2 cursor-pointer text-white font-semibold">Documentation</a>
          </div>
          <Separator orientation="vertical" className="h-[25px] hidden lg:block" />
          <Separator orientation="horizontal" className="hidden lg:hidden block w-full h-[1px] bg-white" />
          <div>
            <a className="transition-all hover:underline hover:underline-offset-2 cursor-pointer text-white font-semibold">Tutorial</a>
          </div>
          <Separator orientation="vertical" className="h-[25px] hidden lg:block" />
          <Separator orientation="horizontal" className="hidden lg:hidden block w-full h-[1px] bg-white" />
          <div>
            <a className="transition-all hover:underline hover:underline-offset-2 cursor-pointer text-white font-semibold">Templates</a>
          </div>
          <Separator orientation="vertical" className="h-[25px] hidden lg:block" />
          <Separator orientation="horizontal" className="hidden lg:hidden block w-full h-[1px] bg-white" />
          <div>
            <a className="transition-all hover:underline hover:underline-offset-2 cursor-pointer text-white font-semibold">Blog</a>
          </div>
        </div>

        <div className="flex items-center gap-[10px] text-white font-semibold">
          Developed in
          <svg className="text-white" xmlns="http://www.w3.org/2000/svg" width="120" height="36" viewBox="0 0 120 36" fill="none"><path fill="currentColor" d="M86.795 26.96V13.494h3.604v13.468h-3.604ZM88.606 11.758c-.536 0-.996-.185-1.38-.553a1.821 1.821 0 0 1-.567-1.341c0-.515.19-.956.567-1.324a1.906 1.906 0 0 1 1.38-.561c.535 0 .992.187 1.37.56.384.369.576.81.576 1.325 0 .52-.192.967-.576 1.341a1.892 1.892 0 0 1-1.37.553ZM96.891 26.96v-7.785c.006-.579.11-1.073.313-1.482a2.23 2.23 0 0 1 .863-.947 2.513 2.513 0 0 1 1.287-.324c.722 0 1.289.234 1.7.701.412.462.615 1.105.61 1.93v7.908h3.605v-8.575c0-1.046-.187-1.947-.559-2.7-.372-.76-.894-1.345-1.565-1.754-.672-.41-1.459-.614-2.361-.614-.965 0-1.786.231-2.463.693a3.735 3.735 0 0 0-1.447 1.859h-.152v-2.377h-3.436v13.468h3.605Z"></path><path fill="currentColor" fill-rule="evenodd" d="M110.582 26.382c.964.561 2.115.842 3.452.842 1.072 0 2.017-.17 2.835-.509.824-.345 1.495-.824 2.014-1.438a4.78 4.78 0 0 0 1.041-2.174l-3.334-.228a2.295 2.295 0 0 1-.542.86c-.237.233-.522.408-.854.525-.333.117-.7.175-1.101.175-.603 0-1.125-.131-1.565-.394a2.66 2.66 0 0 1-1.024-1.122c-.237-.485-.355-1.061-.355-1.727v-.01H120v-1.025c0-1.146-.155-2.145-.465-2.999-.311-.859-.745-1.572-1.304-2.139a5.279 5.279 0 0 0-1.946-1.271 6.57 6.57 0 0 0-2.395-.43c-1.275 0-2.386.292-3.334.877-.942.584-1.672 1.4-2.191 2.446-.519 1.046-.779 2.262-.779 3.647 0 1.42.26 2.651.779 3.692.519 1.034 1.258 1.835 2.217 2.402Zm.57-7.514c.022-.483.142-.925.361-1.324a2.7 2.7 0 0 1 2.437-1.438c.524 0 .984.12 1.379.36.4.233.714.558.939.973.226.415.339.891.339 1.43h-5.455Z" clip-rule="evenodd"></path><path fill="currentColor" d="M84.592 16.3v-2.806h-2.59v-.903c0-.456.105-.81.313-1.061.21-.257.579-.386 1.109-.386.214 0 .423.02.626.061.209.041.384.085.525.132l.643-2.806a10.14 10.14 0 0 0-1.032-.237 8.058 8.058 0 0 0-1.515-.131c-.818 0-1.549.16-2.192.482a3.584 3.584 0 0 0-1.523 1.447c-.367.643-.55 1.452-.55 2.428v.974H76.57v2.805h1.836v10.662h3.596V16.299h2.59Z"></path><path fill="currentColor" fill-rule="evenodd" d="M69.285 27.224c-1.337 0-2.488-.28-3.453-.842-.959-.567-1.698-1.368-2.217-2.402-.519-1.04-.778-2.271-.778-3.692 0-1.385.26-2.6.778-3.647.52-1.046 1.25-1.862 2.192-2.446.948-.585 2.059-.877 3.334-.877a6.57 6.57 0 0 1 2.395.43 5.29 5.29 0 0 1 1.946 1.271c.558.567.993 1.28 1.303 2.14.31.853.466 1.852.466 2.998v1.026h-8.852v.009c0 .666.119 1.242.356 1.727.242.485.584.859 1.023 1.122.44.263.962.395 1.566.395.4 0 .767-.059 1.1-.176.333-.117.618-.292.855-.526.237-.234.417-.52.541-.86l3.334.229a4.785 4.785 0 0 1-1.04 2.174c-.52.614-1.19 1.093-2.014 1.438-.818.34-1.763.509-2.835.509Zm-2.882-8.356h5.454c0-.538-.113-1.014-.338-1.43a2.47 2.47 0 0 0-.94-.972c-.394-.24-.854-.36-1.379-.36a2.7 2.7 0 0 0-2.437 1.438c-.219.4-.339.84-.36 1.324ZM48 9.005V26.96h3.664v-6.365h2.675l3.282 6.365h4.045l-3.677-6.976.157-.073c.942-.456 1.661-1.111 2.158-1.964.496-.86.744-1.885.744-3.078 0-1.186-.245-2.218-.736-3.095-.485-.882-1.193-1.563-2.124-2.043-.925-.485-2.042-.727-3.35-.727H48Zm6.152 8.54h-2.488v-5.437h2.471c.705 0 1.289.108 1.752.325.468.21.815.52 1.04.93.232.408.347.911.347 1.507 0 .59-.115 1.085-.346 1.482-.226.397-.57.695-1.033.894-.463.199-1.044.298-1.743.298ZM20.683.633a6 6 0 0 0-5.366 0l-12 6A6 6 0 0 0 0 12v12a6 6 0 0 0 3.317 5.367l12 6a6 6 0 0 0 5.366 0l12-6A6 6 0 0 0 36 24V12a6 6 0 0 0-3.317-5.367l-12-6ZM12 12a6 6 0 0 1 12 0v12a6 6 0 0 1-12 0V12Z" clip-rule="evenodd"></path><path fill="currentColor" d="M21 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path></svg>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
