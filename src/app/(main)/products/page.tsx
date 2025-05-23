'use client';

import DualSlider from '@/components/common/dualSlider';
import SectionContainer from '@/components/common/sectionContainer';
import Banner from '@/components/sections/banner';
import { Separator } from '@/components/ui/separator';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import SearchInput from '@/components/common/searchInput';
import { useState } from 'react';
import { Toggle } from '@/components/ui/toggle';
import { FilterIcon, LayoutGrid, LayoutList } from 'lucide-react';
import { ComboBox } from '@/components/common/comboBox';
import ProductGrid from '@/components/common/productGrid';
import { products } from '@/components/sections/productSection';
import { Button } from '@/components/ui/button';
import { Drawer, DrawerCloseButton } from '@/components/common/drawer';

const categories = [
  {
    id: 1,
    name: '3D Printers',
    count: 10,
  },
  {
    id: 2,
    name: '3D Scanners',
    count: 5,
  },
  {
    id: 3,
    name: '3D Printing Materials',
    count: 20,
  },
  {
    id: 4,
    name: '3D Printing Accessories',
    count: 15,
  },
  {
    id: 5,
    name: '3D Printing Software',
    count: 8,
  },
  {
    id: 6,
    name: '3D Printing Services',
    count: 12,
  },
  {
    id: 7,
    name: '3D Printing Parts',
    count: 25,
  },
  {
    id: 8,
    name: '3D Printing Tools',
    count: 18,
  },
  {
    id: 9,
    name: '3D Printing Kits',
    count: 7,
  },
  {
    id: 10,
    name: '3D Printing Education',
    count: 4,
  },
];

const materials = [
  {
    id: 1,
    name: 'PLA',
    count: 42,
  },
  {
    id: 2,
    name: 'ABS',
    count: 38,
  },
  {
    id: 3,
    name: 'PETG',
    count: 30,
  },
  {
    id: 4,
    name: 'TPU/TPE',
    count: 25,
  },
  {
    id: 5,
    name: 'Nylon',
    count: 18,
  },
  {
    id: 6,
    name: 'Resin',
    count: 22,
  },
  {
    id: 7,
    name: 'Carbon Fiber',
    count: 10,
  },
  {
    id: 8,
    name: 'Metal-filled',
    count: 12,
  },
  {
    id: 9,
    name: 'Wood-filled',
    count: 8,
  },
  {
    id: 10,
    name: 'HIPS',
    count: 5,
  },
];

const brands = [
  {
    id: 1,
    name: 'Prusa Research',
    count: 24,
  },
  {
    id: 2,
    name: 'Creality',
    count: 30,
  },
  {
    id: 3,
    name: 'Ultimaker',
    count: 15,
  },
  {
    id: 4,
    name: 'Formlabs',
    count: 12,
  },
  {
    id: 5,
    name: 'Anycubic',
    count: 22,
  },
  {
    id: 6,
    name: 'MakerBot',
    count: 10,
  },
  {
    id: 7,
    name: 'Elegoo',
    count: 18,
  },
  {
    id: 8,
    name: 'Monoprice',
    count: 14,
  },
  {
    id: 9,
    name: 'Phrozen',
    count: 8,
  },
  {
    id: 10,
    name: 'Artillery',
    count: 11,
  },
];

const sortByOptions = [
  { value: 'relevance', label: 'Relevance' },
  { value: 'price-low-high', label: 'Price: Low to High' },
  { value: 'price-high-low', label: 'Price: High to Low' },
  { value: 'newest', label: 'Newest First' },
  { value: 'rating', label: 'Customer Rating' },
  { value: 'bestseller', label: 'Bestsellers' },
];

const breadcrumbs = [
  { label: 'Shop', href: '/' },
  { label: 'All products', href: '/products' },
];

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedSort, setSelectedSort] = useState<string>('relevance');
  // Breadcrumb data

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // The filter sidebar content that will be reused in both desktop and mobile views

  return (
    <>
      <Banner
        title="Product catalog"
        breadcrumbs={breadcrumbs}
        image="https://images.unsplash.com/photo-1635241161466-541f065683ba?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="3D printing products showcase"
      />
      <SectionContainer>
        <div className="flex flex-col md:flex-row gap-6">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block w-full lg:w-1/4 border-r border-gray-200 pr-4">
            <FilterSidebar />
          </aside>
          <main className="w-full lg:w-3/4">
            <div className="flex flex-col lg:flex-row justify-between items-center mb-4 gap-5">
              <SearchInput
                value={searchTerm}
                onSearch={handleSearch}
                className="hidden lg:block lg:w-fit xl:w-full"
              />

              {/* Mobile Filter Drawer */}
              <div className="flex lg:hidden flex-row items-center justify-between w-full gap-4">
                {/* Search */}
                <SearchInput value={searchTerm} onSearch={handleSearch} />
                <div className="lg:hidden">
                  <Drawer
                    trigger={
                      <Button variant="outline" size="sm">
                        <FilterIcon className="h-4 w-4 mr-2" />
                        Filter
                      </Button>
                    }
                    footer={
                      <>
                        <Button>Apply Filters</Button>
                        <DrawerCloseButton>
                          <Button variant="outline">Cancel</Button>
                        </DrawerCloseButton>
                      </>
                    }
                  >
                    <div className="max-h-[70vh] overflow-y-auto pr-2">
                      <FilterSidebar />
                    </div>
                  </Drawer>
                </div>
              </div>

              <div className="flex flex-row items-center justify-between w-full lg:w-fit gap-4">
                <div className="flex flex-row items-center ">
                  <span className="mr-1">Sort by : </span>
                  <ComboBox
                    items={sortByOptions}
                    placeholder="Select framework..."
                    searchPlaceholder="Search framework..."
                    value={selectedSort}
                    onChange={(newValue) => setSelectedSort(newValue)}
                    width="sm:w-fit"
                  />
                </div>

                <div className="flex flex-row items-center ">
                  <span className="mr-1">View : </span>
                  <Toggle aria-label="Toggle italic">
                    <LayoutGrid className="h-4 w-4" />
                  </Toggle>{' '}
                  <Toggle aria-label="Toggle italic">
                    <LayoutList className="h-4 w-4" />
                  </Toggle>
                </div>
              </div>
            </div>
            <Separator className="my-4" />

            <ProductGrid
              products={products}
              className={
                'grid grid-cols-1 gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5'
              }
            />

            <div className="w-full flex justify-center mt-10">
              <Button className="mx-auto" variant="outline">
                Load more
              </Button>
            </div>
          </main>
        </div>
      </SectionContainer>
    </>
  );
}

const FilterSidebar = () => (
  <>
    <h2 className="text-2xl font-bold mb-4">Filters</h2>

    {/* price filter */}
    <div className="mb-4">
      <h3 className="text-lg font-semibold mb-2">Price</h3>
      <DualSlider />
    </div>

    {/* Other filters */}
    <div className="mb-4">
      <h3 className="text-lg font-semibold mb-2">Other Filters</h3>
      <Accordion type="multiple" className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Categories</AccordionTrigger>
          <AccordionContent>
            {categories.map((category) => (
              <div key={category.id} className="flex justify-between mb-2">
                <div>
                  <input
                    type="checkbox"
                    id={`category-${category.id}`}
                    className="mr-2"
                  />
                  <label
                    htmlFor={`category-${category.id}`}
                    className="text-sm"
                  >
                    {category.name}
                  </label>
                </div>
                <div className="text-sm text-muted-foreground py-0.5 px-2 rounded-3xl bg-gray-100">
                  {category.count}{' '}
                </div>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Brand</AccordionTrigger>
          <AccordionContent>
            {brands.map((brand) => (
              <div key={brand.id} className="flex justify-between mb-2">
                <div>
                  <input
                    type="checkbox"
                    id={`brand-${brand.id}`}
                    className="mr-2"
                  />
                  <label htmlFor={`brand-${brand.id}`} className="text-sm">
                    {brand.name}
                  </label>
                </div>
                <div className="text-sm text-muted-foreground py-0.5 px-2 rounded-3xl bg-gray-100">
                  {brand.count}{' '}
                </div>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Materials</AccordionTrigger>
          <AccordionContent>
            {materials.map((material) => (
              <div key={material.id} className="flex justify-between mb-2">
                <div>
                  <input
                    type="checkbox"
                    id={`material-${material.id}`}
                    className="mr-2"
                  />
                  <label
                    htmlFor={`material-${material.id}`}
                    className="text-sm"
                  >
                    {material.name}
                  </label>
                </div>
                <div className="text-sm text-muted-foreground py-0.5 px-2 rounded-3xl bg-gray-100">
                  {material.count}{' '}
                </div>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="hidden w-full mt-10 gap-2  lg:flex lg:flex-col">
        <Button className="">Apply Filters</Button>
        <Button variant="outline">Cancel</Button>
      </div>
    </div>
  </>
);
