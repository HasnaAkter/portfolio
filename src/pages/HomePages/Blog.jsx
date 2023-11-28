
import Card from '../../component/Blog'; 
import img1 from '../../assets/pp.jpg';

const Blog = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between">
            <div className="">
                <h3 className="font-bold text-4xl text-center my-3 capitalize">My Blogs</h3>
               <div className="text-end p-5"> <button className="bg-primary text-white px-4 py-2 rounded-full">
                    Explore All
                </button></div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5">
                    {[...Array(8)].map((_, index) => (
                        <Card
                            key={index}
                            imgSrc={img1}
                            title="Blog!"
                            isNew={index % 3 === 0}
                            description="If a dog chews Blog whose Blog does he choose?"
                            categories={['Fashion', 'Products']}
                        />
                    ))}
                </div>
            </div>

            
        </div>
    );
};

export default Blog;
