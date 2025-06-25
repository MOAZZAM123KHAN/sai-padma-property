
import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Search, Filter } from 'lucide-react';

interface PropertyFilterProps {
  onFilter: (filteredProperties: any[]) => void;
  properties: any[];
}

const PropertyFilter = ({ onFilter, properties }: PropertyFilterProps) => {
  const [filters, setFilters] = useState({
    location: '',
    type: '',
    bhk: '',
    budget: '',
    search: ''
  });
  const [showFilters, setShowFilters] = useState(false);

  const handleFilterChange = (key: string, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    applyFilters(newFilters);
  };

  const applyFilters = (currentFilters: any) => {
    let filtered = properties.filter(property => {
      const matchesLocation = !currentFilters.location || 
        property.location.toLowerCase().includes(currentFilters.location.toLowerCase());
      
      const matchesType = !currentFilters.type || 
        property.type.toLowerCase() === currentFilters.type.toLowerCase();
      
      const matchesBHK = !currentFilters.bhk || 
        property.bhk.toLowerCase().includes(currentFilters.bhk.toLowerCase());
      
      const matchesSearch = !currentFilters.search || 
        property.title.toLowerCase().includes(currentFilters.search.toLowerCase()) ||
        property.location.toLowerCase().includes(currentFilters.search.toLowerCase());

      return matchesLocation && matchesType && matchesBHK && matchesSearch;
    });

    onFilter(filtered);
  };

  const clearFilters = () => {
    const clearedFilters = {
      location: '',
      type: '',
      bhk: '',
      budget: '',
      search: ''
    };
    setFilters(clearedFilters);
    onFilter([]);
  };

  return (
    <Card className="shadow-lg">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Find Your Perfect Property</h3>
          <Button 
            variant="outline" 
            onClick={() => setShowFilters(!showFilters)}
            className="border-green-600 text-green-600 hover:bg-green-50"
          >
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </Button>
        </div>

        <div className="flex mb-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              placeholder="Search by location or property name..."
              value={filters.search}
              onChange={(e) => handleFilterChange('search', e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {showFilters && (
          <div className="grid md:grid-cols-4 gap-4 mb-4">
            <Select value={filters.location} onValueChange={(value) => handleFilterChange('location', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Locations</SelectItem>
                <SelectItem value="banjara hills">Banjara Hills</SelectItem>
                <SelectItem value="jubilee hills">Jubilee Hills</SelectItem>
                <SelectItem value="hitec city">HITEC City</SelectItem>
                <SelectItem value="madhapur">Madhapur</SelectItem>
              </SelectContent>
            </Select>

            <Select value={filters.type} onValueChange={(value) => handleFilterChange('type', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Property Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Types</SelectItem>
                <SelectItem value="apartment">Apartment</SelectItem>
                <SelectItem value="villa">Villa</SelectItem>
                <SelectItem value="commercial">Commercial</SelectItem>
              </SelectContent>
            </Select>

            <Select value={filters.bhk} onValueChange={(value) => handleFilterChange('bhk', value)}>
              <SelectTrigger>
                <SelectValue placeholder="BHK" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All BHK</SelectItem>
                <SelectItem value="1">1 BHK</SelectItem>
                <SelectItem value="2">2 BHK</SelectItem>
                <SelectItem value="3">3 BHK</SelectItem>
                <SelectItem value="4">4+ BHK</SelectItem>
              </SelectContent>
            </Select>

            <Select value={filters.budget} onValueChange={(value) => handleFilterChange('budget', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Budget" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Budgets</SelectItem>
                <SelectItem value="under-1-cr">Under ₹1 Cr</SelectItem>
                <SelectItem value="1-2-cr">₹1-2 Cr</SelectItem>
                <SelectItem value="2-5-cr">₹2-5 Cr</SelectItem>
                <SelectItem value="above-5-cr">Above ₹5 Cr</SelectItem>
              </SelectContent>
            </Select>
          </div>
        )}

        {(filters.location || filters.type || filters.bhk || filters.budget || filters.search) && (
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-600">
              Filters applied
            </div>
            <Button 
              variant="ghost" 
              onClick={clearFilters}
              className="text-green-600 hover:text-green-700"
            >
              Clear All
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PropertyFilter;
