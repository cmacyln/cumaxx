'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactSchema, type ContactFormData } from '@/lib/validations/contact'
import { sendContactEmail } from '@/lib/email'
import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export function ContactForm() {
  const t = useTranslations('contact.form')
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    const formData = new FormData()
    Object.entries(data).forEach(([key, value]) =>
      formData.append(key, String(value))
    )

    const result = await sendContactEmail(formData)

    if (result.success) {
      setStatus('success')
      reset()
    } else {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div
        className="rounded-xl p-8 text-center"
        style={{
          border: '1px solid rgba(0,240,255,0.3)',
          background: 'rgba(0,240,255,0.05)',
        }}
      >
        <p className="text-lg font-medium" style={{ color: '#00f0ff' }}>
          {t('success')}
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {status === 'error' && (
        <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-4 text-sm text-destructive">
          {t('error')}
        </div>
      )}

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">{t('name')} *</Label>
          <Input id="name" {...register('name')} placeholder="Max Mustermann" />
          {errors.name && (
            <p className="text-xs text-destructive">{errors.name.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">{t('email')} *</Label>
          <Input
            id="email"
            type="email"
            {...register('email')}
            placeholder="max@unternehmen.de"
          />
          {errors.email && (
            <p className="text-xs text-destructive">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="company">{t('company')}</Label>
        <Input id="company" {...register('company')} placeholder="Ihr Unternehmen" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="budget">{t('budget')}</Label>
        <Select onValueChange={(v) => setValue('budget', v as ContactFormData['budget'])}>
          <SelectTrigger id="budget">
            <SelectValue placeholder="Budget auswählen" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="under5k">Unter 5.000 €</SelectItem>
            <SelectItem value="5k-15k">5.000 € – 15.000 €</SelectItem>
            <SelectItem value="15k-50k">15.000 € – 50.000 €</SelectItem>
            <SelectItem value="50k+">50.000 € +</SelectItem>
            <SelectItem value="not-sure">Noch unklar</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">{t('message')} *</Label>
        <Textarea
          id="message"
          {...register('message')}
          placeholder="Beschreiben Sie Ihr Projekt..."
          rows={5}
        />
        {errors.message && (
          <p className="text-xs text-destructive">{errors.message.message}</p>
        )}
      </div>

      <div className="flex items-start gap-2">
        <Checkbox
          id="dsgvo"
          onCheckedChange={(checked) => setValue('dsgvo', Boolean(checked) as true)}
          className="mt-1"
        />
        <Label htmlFor="dsgvo" className="text-xs leading-relaxed text-foreground/60">
          {t('dsgvo')}
        </Label>
      </div>
      {errors.dsgvo && (
        <p className="text-xs text-destructive">{errors.dsgvo.message}</p>
      )}

      <Button
        type="submit"
        disabled={isSubmitting}
        size="lg"
        className="w-full md:w-auto"
        style={{
          background: 'linear-gradient(90deg, #00f0ff, #a020f0)',
          color: '#fff',
          boxShadow: '0 0 20px rgba(0,240,255,0.2)',
          border: 'none',
        }}
      >
        {isSubmitting ? t('sending') : t('submit')}
      </Button>
    </form>
  )
}
