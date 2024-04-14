import React, { useContext } from 'react';
import DefaultLayout from '../components/layout/DefaultLayout';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Carousel } from 'antd';
import ClearFix from '../components/common/ClearFix';
import Banner1 from '../images/banner/banner1.jpg';
import Banner2 from '../images/banner/banner2.jpg';
import Banner3 from '../images/banner/banner3.jpg';
import ProductCard from '../components/product/ProductCard';
import AuthContext from '../components/auth/AuthContext';

const BannerBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 24px;
`;

const BannerCarouselContainer = styled.div`
    width: 100%;
    padding: 1px;

    @media (min-width: 769px) {
        width: 66.66%;
    }
`;

const BannerSectionContainer = styled.div`
    width: 100%;
    
    @media (min-width: 769px) {
        width: 33.11%;
    }
`;

const BannerContainer = styled.div`
    width: 100%;
    padding: 1px;
`;

const BannerFeatureContainer = styled.div`
    display: flex;
    width: 100%;
    background-color: white;
    padding: 8px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    border-left: 1px solid rgba(0, 0, 0, 0.1);
    border-right: 1px solid rgba(0, 0, 0, 0.1);
`;

const BannerFeatureColumn = styled.div`
    width: 33.33%;
    text-align: center;
`;

const CustomerContainer = styled.div`
    margin-bottom: 48px;
`;

const ProductCollectionContainer = styled.div`
    margin: 0 -4px 48px -4px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`;

const ProductContainer = styled.div`
    padding: 4px;
    width: 100%;
    box-sizing: border-box; 
    -moz-box-sizing:border-box; /* Firefox */
    -webkit-box-sizing:border-box; /* Safari */
    a {
        text-decoration: none;
    }
    @media (min-width: 577px) {
        width: 50%;
    }
    @media (min-width: 769px) {
        width: 20%;
    }
`;

const Image = styled.div`
    width: 100%;
    height: ${(props) => props.height}px;
    background-image: ${(props) => `url(${props.url})`};
    background-position: center;
    background-size: cover;
`;

const HomePage = () => {
    const { isAuthenticated } = useContext(AuthContext);
    return (
        <DefaultLayout fixedHeader>
            <ClearFix />
            {isAuthenticated && <h1>歡迎回來</h1>}
            <BannerBox>
                <BannerCarouselContainer>
                    <Carousel autoplay>
                        <Link to="p001">
                            <Image height={200} url={Banner1} />
                        </Link>
                        <Link to="p002">
                            <Image height={200} url={Banner2} />
                        </Link>
                        <Link to="p003">
                            <Image height={200} url={Banner3} />
                        </Link>
                    </Carousel>
                </BannerCarouselContainer>
                <BannerSectionContainer>
                    <BannerContainer>
                        <Link to="p004">
                            <Image height={100} url={Banner1} />
                        </Link>
                    </BannerContainer>
                    <BannerContainer>
                        <Link to="p005">
                            <Image height={100} url={Banner2} />
                        </Link>
                    </BannerContainer>
                </BannerSectionContainer>
                <BannerFeatureContainer>
                    <BannerFeatureColumn>15天鑑賞期</BannerFeatureColumn>
                    <BannerFeatureColumn>退貨無負擔</BannerFeatureColumn>
                    <BannerFeatureColumn>假一賠二</BannerFeatureColumn>
                </BannerFeatureContainer>
            </BannerBox>
            <CustomerContainer>
                <Link to="/advertising">
                    <Image height={100} url={Banner1}/>
                </Link>
            </CustomerContainer>
            <ProductCollectionContainer>
                <ProductContainer>
                    <Link to="/p001">
                        <ProductCard 
                            title="foo" 
                            coverUrl={Banner1} 
                            salePrices={[100, 200]} 
                            listPrices={[200, 299]} 
                        />
                    </Link>
                </ProductContainer>
                <ProductContainer>
                    <Link to="/p002">
                        <ProductCard 
                            title="banner2" 
                            coverUrl={Banner2} 
                            salePrices={[100, 200]} 
                            listPrices={[200, 299]} 
                        />
                    </Link>
                </ProductContainer>
                <ProductContainer>
                    <Link to="/p003">
                        <ProductCard
                            title="banner3" 
                            coverUrl={Banner3} 
                            salePrices={[100, 200]} 
                            listPrices={[200, 299]} 
                        />
                    </Link>
                </ProductContainer>
                <ProductContainer>
                    <Link to="/p001">
                        <ProductCard 
                            title="foo" 
                            coverUrl={Banner1} 
                            salePrices={[100, 200]} 
                            listPrices={[200, 299]} 
                        />
                    </Link>
                </ProductContainer>
                <ProductContainer>
                    <Link to="/p002">
                        <ProductCard 
                            title="banner2" 
                            coverUrl={Banner2} 
                            salePrices={[100, 200]} 
                            listPrices={[200, 299]} 
                        />
                    </Link>
                </ProductContainer>
                <ProductContainer>
                    <Link to="/p003">
                        <ProductCard 
                            title="banner3" 
                            coverUrl={Banner3} 
                            salePrices={[100, 200]} 
                            listPrices={[200, 299]} 
                        />
                    </Link>
                </ProductContainer>
                <ProductContainer>
                    <Link to="/p001">
                        <ProductCard 
                            title="foo" 
                            coverUrl={Banner1} 
                            salePrices={[100, 200]} 
                            listPrices={[200, 299]} 
                        />
                    </Link>
                </ProductContainer>
                <ProductContainer>
                    <Link to="/p002">
                        <ProductCard 
                            title="banner2" 
                            coverUrl={Banner2} 
                            salePrices={[100, 200]} 
                            listPrices={[200, 299]} 
                        />
                    </Link>
                </ProductContainer>
                <ProductContainer>
                    <Link to="/p003">
                        <ProductCard 
                            title="banner3" 
                            coverUrl={Banner3} 
                            salePrices={[100, 200]} 
                            listPrices={[200, 299]} 
                        />
                    </Link>
                </ProductContainer>
                <ProductContainer>
                    <Link to="/p001">
                        <ProductCard 
                            title="foo" 
                            coverUrl={Banner1} 
                            salePrices={[100, 200]} 
                            listPrices={[200, 299]} 
                        />
                    </Link>
                </ProductContainer>
                <ProductContainer>
                    <Link to="/p002">
                        <ProductCard 
                            title="banner2" 
                            coverUrl={Banner2} 
                            salePrices={[100, 200]} 
                            listPrices={[200, 299]} 
                        />
                    </Link>
                </ProductContainer>
                <ProductContainer>
                    <Link to="/p003">
                        <ProductCard 
                            title="banner3" 
                            coverUrl={Banner3} 
                            salePrices={[100, 200]} 
                            listPrices={[200, 299]} 
                        />
                    </Link>
                </ProductContainer>
                <ProductContainer>
                    <Link to="/p001">
                        <ProductCard 
                            title="foo" 
                            coverUrl={Banner1} 
                            salePrices={[100, 200]} 
                            listPrices={[200, 299]} 
                        />
                    </Link>
                </ProductContainer>
                <ProductContainer>
                    <Link to="/p002">
                        <ProductCard 
                            title="banner2" 
                            coverUrl={Banner2} 
                            salePrices={[100, 200]} 
                            listPrices={[200, 299]} 
                        />
                    </Link>
                </ProductContainer>
                <ProductContainer>
                    <Link to="/p003">
                        <ProductCard 
                            title="banner3" 
                            coverUrl={Banner3} 
                            salePrices={[100, 200]} 
                            listPrices={[200, 299]} 
                        />
                    </Link>
                </ProductContainer>
            </ProductCollectionContainer>
            {/* 下方的  15天鑑賞期 蝦皮安心退 正品保障 框框*/}
            {/* 知名品牌旗艦店全都在蝦皮商城... 說明部分 */}
        </DefaultLayout>
    );
};

export default HomePage;