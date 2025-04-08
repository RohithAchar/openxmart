"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Heart, Package, ShoppingCart, Star, Truck } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

// Mock data for orders
const orders = [
  {
    id: "ORD-1234",
    date: "2023-04-01",
    product: "Wireless Headphones",
    price: 129.99,
    status: "delivered",
    image: "/images/placeholder.webp",
    estimatedDelivery: "Delivered on Apr 5, 2023",
    rating: null,
  },
  {
    id: "ORD-1235",
    date: "2023-04-10",
    product: "Smart Watch",
    price: 249.99,
    status: "shipped",
    image: "/images/placeholder.webp",
    estimatedDelivery: "Arriving on Apr 15, 2023",
    rating: null,
  },
  {
    id: "ORD-1236",
    date: "2023-04-15",
    product: "Bluetooth Speaker",
    price: 79.99,
    status: "processing",
    image: "/images/placeholder.webp",
    estimatedDelivery: "Ships on Apr 18, 2023",
    rating: null,
  },
  {
    id: "ORD-1237",
    date: "2023-04-18",
    product: "Mechanical Keyboard",
    price: 149.99,
    status: "pending",
    image: "/images/placeholder.webp",
    estimatedDelivery: "Processing",
    rating: null,
  },
];

// Mock data for favorite products
const favoriteProducts = [
  {
    id: 1,
    name: "Premium Noise-Cancelling Headphones",
    price: 299.99,
    image: "/images/placeholder.webp",
    rating: 4.8,
    inStock: true,
  },
  {
    id: 2,
    name: "Ultra-Thin Laptop",
    price: 1299.99,
    image: "/images/placeholder.webp",
    rating: 4.9,
    inStock: true,
  },
  {
    id: 3,
    name: "Smart Home Hub",
    price: 129.99,
    image: "/images/placeholder.webp",
    rating: 4.5,
    inStock: false,
  },
  {
    id: 4,
    name: "Fitness Tracker",
    price: 89.99,
    image: "/images/placeholder.webp",
    rating: 4.6,
    inStock: true,
  },
];

// Helper function to get status badge color
const getStatusBadge = (status: string) => {
  switch (status) {
    case "delivered":
      return <Badge className="bg-green-500">Delivered</Badge>;
    case "shipped":
      return <Badge className="bg-blue-500">Shipped</Badge>;
    case "processing":
      return <Badge className="bg-yellow-500">Processing</Badge>;
    case "pending":
      return <Badge className="bg-gray-500">Pending</Badge>;
    default:
      return <Badge>Unknown</Badge>;
  }
};

// Helper function to get status icon
const getStatusIcon = (status: string) => {
  switch (status) {
    case "delivered":
      return <Package className="h-5 w-5 text-green-500" />;
    case "shipped":
      return <Truck className="h-5 w-5 text-blue-500" />;
    case "processing":
    case "pending":
      return <ShoppingCart className="h-5 w-5 text-yellow-500" />;
    default:
      return null;
  }
};

const MyBoxPage = () => {
  const [selectedOrder, setSelectedOrder] = useState<(typeof orders)[0] | null>(
    null
  );
  const [isRatingDialogOpen, setIsRatingDialogOpen] = useState(false);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [userRatings, setUserRatings] = useState<Record<string, number>>({});

  const handleRateProduct = (order: (typeof orders)[0]) => {
    setSelectedOrder(order);
    setIsRatingDialogOpen(true);
  };

  const handleSetRating = (rating: number) => {
    if (selectedOrder) {
      setUserRatings((prev) => ({
        ...prev,
        [selectedOrder.id]: rating,
      }));
      setIsRatingDialogOpen(false);
      setSelectedOrder(null);
      setHoveredRating(0);
    }
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">My Orders & Favorites</h1>

      <Tabs defaultValue="orders" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="orders">My Orders</TabsTrigger>
          <TabsTrigger value="favorites">Favorites</TabsTrigger>
        </TabsList>

        <TabsContent value="orders">
          <div className="rounded-lg border shadow-sm">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Image</TableHead>
                  <TableHead>Order ID</TableHead>
                  <TableHead>Product</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Delivery</TableHead>
                  <TableHead>Rating</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {orders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell>
                      <Image
                        src={order.image || "/placeholder.svg"}
                        alt={order.product}
                        width={50}
                        height={50}
                        className="rounded-md"
                      />
                    </TableCell>
                    <TableCell className="font-medium">{order.id}</TableCell>
                    <TableCell>{order.product}</TableCell>
                    <TableCell>
                      {new Date(order.date).toLocaleDateString()}
                    </TableCell>
                    <TableCell>₹{order.price.toFixed(2)}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        {getStatusIcon(order.status)}
                        {getStatusBadge(order.status)}
                      </div>
                    </TableCell>
                    <TableCell>{order.estimatedDelivery}</TableCell>
                    <TableCell>
                      {userRatings[order.id] ? (
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span>{userRatings[order.id]}</span>
                        </div>
                      ) : (
                        <p className="text-center">-</p>
                      )}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="outline" size="sm">
                          Track Order
                        </Button>
                        {order.status === "delivered" &&
                          !userRatings[order.id] && (
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleRateProduct(order)}
                            >
                              Rate Product
                            </Button>
                          )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>

        <TabsContent value="favorites">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {favoriteProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden">
                <CardHeader className="p-0">
                  <div className="relative h-48 w-full">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-2 right-2 bg-white/80 rounded-full"
                    >
                      <Heart className="h-5 w-5 text-red-500 fill-red-500" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="text-lg line-clamp-2 mb-2">
                    {product.name}
                  </CardTitle>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-lg">
                      ₹{product.price.toFixed(2)}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      ★ {product.rating} (120)
                    </span>
                  </div>
                  <div className="mt-2">
                    {product.inStock ? (
                      <Badge
                        variant="outline"
                        className="bg-green-50 text-green-700 border-green-200"
                      >
                        In Stock
                      </Badge>
                    ) : (
                      <Badge
                        variant="outline"
                        className="bg-red-50 text-red-700 border-red-200"
                      >
                        Out of Stock
                      </Badge>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0 flex gap-2">
                  <Button className="w-full" disabled={!product.inStock}>
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <Dialog open={isRatingDialogOpen} onOpenChange={setIsRatingDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Rate Your Product</DialogTitle>
          </DialogHeader>
          <div className="py-6">
            <p className="text-center mb-4">
              How would you rate {selectedOrder?.product}?
            </p>
            <div className="flex justify-center gap-2">
              {[1, 2, 3, 4, 5].map((rating) => (
                <button
                  key={rating}
                  className="p-2 hover:scale-110 transition-transform"
                  onMouseEnter={() => setHoveredRating(rating)}
                  onMouseLeave={() => setHoveredRating(0)}
                  onClick={() => handleSetRating(rating)}
                >
                  <Star
                    className={`h-8 w-8 ${
                      rating <= (hoveredRating || 0)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MyBoxPage;
