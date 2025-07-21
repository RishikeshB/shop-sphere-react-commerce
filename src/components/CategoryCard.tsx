import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Category } from '@/types';

interface CategoryCardProps {
  category: Category;
  className?: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, className = '' }) => {
  return (
    <Link to={`/products?category=${category.id}`}>
      <Card className={`group hover:shadow-product transition-all duration-300 hover:-translate-y-1 cursor-pointer ${className}`}>
        <div className="relative overflow-hidden rounded-t-lg">
          <img
            src={category.image}
            alt={category.name}
            className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          
          <Badge className="absolute top-2 right-2 bg-primary/90 text-primary-foreground">
            {category.productCount} items
          </Badge>
        </div>
        
        <CardContent className="p-4">
          <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
            {category.name}
          </h3>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CategoryCard;