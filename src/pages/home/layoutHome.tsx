import Layout from '@/components/layout/_root/Layout';
import Banner from '@/pages/home/components/Banner';
import ProductList from './components/products/ProductList';
import Category from './components/products/Category';

const LayoutHome = () => {  
  return (
    <Layout>
      <div className='mt-[64px] bg-primary'>
        <div className='container mx-auto'>
          <Banner />
        </div>
        <div className='p-[16px] bg-white rounded-t-[36px] rounded-b-[0] border-b border-[#DEDEDE]'>
          <Category />
        </div>
        <ProductList />
      </div>
    </Layout>
  );
};

export default LayoutHome;
