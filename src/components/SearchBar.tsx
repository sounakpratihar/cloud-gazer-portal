
import { Search } from "lucide-react";
import { Input } from "./ui/input";

interface SearchBarProps {
  onSearch: (city: string) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const input = form.querySelector('input') as HTMLInputElement;
    if (input.value.trim()) {
      onSearch(input.value.trim());
      input.value = '';
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full max-w-md">
      <Input
        type="text"
        placeholder="Search for a city..."
        className="w-full pl-10 pr-4 py-2 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:ring-2 focus:ring-white/30 focus:border-transparent"
      />
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-4 h-4" />
    </form>
  );
}
