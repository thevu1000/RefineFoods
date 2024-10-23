export const fetchProducts = async (start: number, end: number, categoryId: number) => {
    const response = await fetch(`https://api.finefoods.refine.dev/products?_end=${end}&_start=${start}&category.id=${categoryId}`);
    
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    
    const data = await response.json();
    const totalCount = response.headers.get('x-total-count');
    
    return { data, totalCount }; // Trả về cả dữ liệu và x-total-count
};
