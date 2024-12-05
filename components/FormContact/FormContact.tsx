"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { formSchema } from "./Formulario.form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Send } from "lucide-react";

export function FormContact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const { isValid } = form.formState;

  return (
    <div className="bg-darkBg/10 p-5 md:p-10 md:rounded-r-xl rounded-2xl dark:border-2 dark:border-white">
      <h2 className="text-redCustom font-semibold text-4xl leading-10 mb-8 text-center">
        Envíanos un mensaje
      </h2>
      <p className="pb-5 text-justify leading-6 text-lg">
        Nuestro equipo será tu mejor aliado para resolver tus problemas o
        cualquier requerimiento que presentes, te brindamos alternativas de
        soluciones efectivas para tu empresa.
      </p>

      <Form {...form}>
        <form className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cliente *</FormLabel>
                <FormControl>
                  <Input placeholder="Nombre completo" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email *</FormLabel>
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Celular *</FormLabel>
                <FormControl>
                  <Input placeholder="Celular" {...field} maxLength={9} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mensaje</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Coméntanos cuál es tu inquietud"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="bg-[#F30D10] w-full rounded-2xl uppercase text-2xl dark:text-white"
            disabled={!isValid}
          >
            Enviar
            <Send className="w-6 h-6 ml-3" />
          </Button>
        </form>
      </Form>
    </div>
  );
}
