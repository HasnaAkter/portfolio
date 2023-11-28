

const Blog = ({ imgSrc, title, isNew, description, categories }) => {
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure>
                <img src={imgSrc} alt="Blog" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    {isNew && <div className="badge badge-secondary">NEW</div>}
                </h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    {categories.map((category, index) => (
                        <div key={index} className="badge badge-outline">{category}</div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;
