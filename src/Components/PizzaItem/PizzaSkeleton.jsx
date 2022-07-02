import React from "react"
import ContentLoader from "react-content-loader"

const PizzaSkeleton = () => (
    <ContentLoader
        className="pizza-block"
        speed={2}
        width={280}
        height={500}
        viewBox="0 0 280 500"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <circle cx="133" cy="134" r="125" />
        <rect x="0" y="275" rx="10" ry="10" width="280" height="29" />
        <rect x="0" y="324" rx="21" ry="21" width="280" height="88" />
        <rect x="0" y="429" rx="15" ry="15" width="109" height="30" />
        <rect x="153" y="427" rx="18" ry="18" width="120" height="45" />
    </ContentLoader>
)

export default PizzaSkeleton