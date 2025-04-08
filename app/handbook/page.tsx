"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  UserPlus,
  Search,
  Package2,
  MessageCircle,
  Shield,
} from "lucide-react";
import BackBtn from "@/components/back-btn";

export default function Home() {
  const sections = [
    {
      id: "account",
      title: "Creating an Account",
      icon: <UserPlus className="w-6 h-6" />,
      content: (
        <>
          <h3 className="text-lg font-semibold mb-2">
            How to sign up and log in
          </h3>
          <ol className="space-y-4">
            <li className="flex gap-2">
              <span className="font-semibold">1.</span>
              Click the "Sign Up" button in the top right corner
            </li>
            <li className="flex gap-2">
              <span className="font-semibold">2.</span>
              Enter your email address and create a strong password
            </li>
            <li className="flex gap-2">
              <span className="font-semibold">3.</span>
              Verify your email address through the confirmation link
            </li>
            <li className="flex gap-2">
              <span className="font-semibold">4.</span>
              Complete your profile with business information
            </li>
          </ol>
        </>
      ),
    },
    {
      id: "products",
      title: "Finding Products",
      icon: <Search className="w-6 h-6" />,
      content: (
        <>
          <h3 className="text-lg font-semibold mb-2">
            How to search, filter, and browse categories
          </h3>
          <ul className="space-y-4">
            <li>
              <strong>Search Bar:</strong> Use keywords, product codes, or
              descriptions
            </li>
            <li>
              <strong>Filters:</strong> Narrow results by price, category,
              location, and more
            </li>
            <li>
              <strong>Categories:</strong> Browse organized product sections
            </li>
            <li>
              <strong>Saved Searches:</strong> Save frequent searches for quick
              access
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "samples",
      title: "Buying Samples",
      icon: <Package2 className="w-6 h-6" />,
      content: (
        <>
          <h3 className="text-lg font-semibold mb-2">
            Steps to purchase sample products securely
          </h3>
          <div className="space-y-4">
            <p>Follow these steps to order product samples:</p>
            <ol className="space-y-2">
              <li className="flex gap-2">
                <span className="font-semibold">1.</span>
                Select "Request Sample" on the product page
              </li>
              <li className="flex gap-2">
                <span className="font-semibold">2.</span>
                Choose quantity and specifications
              </li>
              <li className="flex gap-2">
                <span className="font-semibold">3.</span>
                Review shipping costs and delivery time
              </li>
              <li className="flex gap-2">
                <span className="font-semibold">4.</span>
                Complete secure payment
              </li>
            </ol>
          </div>
        </>
      ),
    },
    {
      id: "contact",
      title: "Contacting Sellers",
      icon: <MessageCircle className="w-6 h-6" />,
      content: (
        <>
          <h3 className="text-lg font-semibold mb-2">
            How to connect for bulk orders
          </h3>
          <div className="space-y-4">
            <p>Multiple ways to reach sellers:</p>
            <ul className="space-y-2">
              <li>Direct messaging through platform</li>
              <li>Request for quotation (RFQ)</li>
              <li>Schedule video calls</li>
              <li>Business card exchange</li>
            </ul>
          </div>
        </>
      ),
    },
    {
      id: "security",
      title: "Payment & Security",
      icon: <Shield className="w-6 h-6" />,
      content: (
        <>
          <h3 className="text-lg font-semibold mb-2">
            How transactions work and safety tips
          </h3>
          <div className="space-y-4">
            <h4 className="font-medium">Secure Payments</h4>
            <ul className="space-y-2">
              <li>SSL encrypted transactions</li>
              <li>Multiple payment methods supported</li>
              <li>Escrow service available</li>
              <li>Fraud prevention systems</li>
            </ul>
            <h4 className="font-medium">Safety Tips</h4>
            <ul className="space-y-2">
              <li>Verify seller credentials</li>
              <li>Review transaction history</li>
              <li>Use platform messaging only</li>
              <li>Report suspicious activity</li>
            </ul>
          </div>
        </>
      ),
    },
  ];

  return (
    <div className="container mx-auto py-8 px-4">
      <BackBtn />
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">User Handbook</h1>
          <p className="text-muted-foreground">
            Everything you need to know about using our platform
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Quick Navigation</CardTitle>
            <CardDescription>
              Select a topic below to learn more about using our platform
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="account" className="w-full">
              <TabsList className="flex w-full overflow-x-auto gap-2 lg:grid lg:grid-cols-5">
                {sections.map((section) => (
                  <TabsTrigger
                    key={section.id}
                    value={section.id}
                    className="flex items-center gap-2"
                  >
                    {section.icon}
                    <span className="hidden lg:inline">{section.title}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
              {sections.map((section) => (
                <TabsContent key={section.id} value={section.id}>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        {section.icon}
                        {section.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ScrollArea className="h-[400px] w-full rounded-md border p-4">
                        {section.content}
                      </ScrollArea>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
