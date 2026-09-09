import React from 'react';
import Link from 'next/link';
import { Calendar, MapPin, ArrowRight, ShieldCheck } from 'lucide-react';
import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/register');
}