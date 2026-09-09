"use client";
import {useState} from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e:React.FormEvent) => {e. preventDefault();

  console.log({name,});
  console.log({email});
  console.log({password});
  }

};