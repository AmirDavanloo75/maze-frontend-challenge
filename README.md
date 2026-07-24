# 🛍️ فروشگاه ماز - چالش Frontend

پروژه چالش فنی **توسعه‌دهنده Frontend** شرکت ماز.

## 📋 درباره پروژه

این یک اپلیکیشن فروشگاه آنلاین است که با استفاده از **Nuxt 4**، **Vue.js 3**، **TypeScript** و **Tailwind CSS** توسعه داده شده است. داده‌ها از [Fake Store API](https://fakestoreapi.com/) دریافت می‌شوند.

## ✨ ویژگی‌ها

- ✅ **Server-Side Rendering (SSR)** برای SEO بهینه
- ✅ **TypeScript** برای Type Safety کامل
- ✅ **Pinia** برای مدیریت State
- ✅ **Tailwind CSS** برای طراحی Responsive
- ✅ **Lazy Loading** تصاویر با NuxtPicture
- ✅ **کد تمیز و ماژولار** با معماری Feature-Based

## 🏗️ معماری پروژه

```
app/
├── components/          # کامپوننت‌های UI
│   ├── product/         # کامپوننت‌های مرتبط با محصول تکی
│   ├── productList/     # کامپوننت‌های لیست محصولات
│   ├── sidebar/         # کامپوننت‌های سایدبار
│   └── footer/          # کامپوننت‌های فوتر
├── composables/         # Composable functions
├── layouts/             # Layout های صفحه
├── pages/               # صفحات اپلیکیشن
├── repositories/        # لایه ارتباط با API
├── stores/              # Pinia stores
├── types/               # TypeScript interfaces
└── utils/               # Utility functions
```

### الگوی معماری

```
Repository → Service/Composable → Store → Component
```

- **Repository:** مسئول مستقیم تماس با API
- **Service/Composable:** منطق تجاری و تبدیل داده
- **Store:** مدیریت State سراسری
- **Component:** نمایش UI

## 🚀 نحوه اجرا

### نصب وابستگی‌ها

```bash
npm install
```

### اجرای سرور توسعه

```bash
npm run dev
```

اپلیکیشن در آدرس `http://localhost:3000` در دسترس خواهد بود.

### Build برای Production

```bash
npm run build
```

### پیش‌نمایش Build

```bash
npm run preview
```

## 🎨 طراحی UI

طراحی رابط کاربری بر اساس [Figma Design](https://www.figma.com/design/2vwsqBfz6b8RD5394y9oIJ/Front-Test) پیاده‌سازی شده است.

## 🔧 تکنولوژی‌های استفاده شده

| تکنولوژی | نسخه | کاربرد |
|----------|------|--------|
| Nuxt 4 | Latest | Framework اصلی |
| Vue.js 3 | Latest | UI Library |
| TypeScript | 5.x | Type Safety |
| Tailwind CSS | 3.x | Styling |
| Pinia | Latest | State Management |
| Nuxt Icon | Latest | آیکون‌ها |
| Fake Store API | - | منبع داده |

## 📦 ساختار کامیت‌ها

این پروژه از [Conventional Commits](https://www.conventionalcommits.org/) پیروی می‌کند:

- `feat:` اضافه کردن ویژگی جدید
- `fix:` رفع باگ
- `refactor:` بهبود کد بدون تغییر عملکرد
- `chore:` تغییرات build یا tooling

## 🎯 نکات کلیدی پیاده‌سازی

### 1. Type Safety
- استفاده از TypeScript در تمام فایل‌ها
- تعریف Interface های مرکزی در `types/`
- استفاده از Generic Types در `useAsyncData` و `useFetch`

### 2. Performance Optimization
- استفاده از NuxtPicture
- Lazy Loading تصاویر

### 3. Code Quality
- جداسازی لایه‌ها (Repository, Service, Store, Component)
- استفاده از Composable Pattern
- رعایت اصل Separation of Concerns

### 4. Error Handling
- مدیریت خطا در تمام لایه‌ها
- نمایش UI مناسب برای وضعیت‌های Error و Empty
- استفاده از `createError` برای خطاهای 404 و 500

### 5. SEO
- استفاده از `useSeoMeta` برای Meta Tags داینامیک

### 6. Accessibility
- استفاده از `aria-label`، `aria-expanded`، `aria-current`
- Semantic HTML (`nav`, `main`, `aside`, `section`)
- Keyboard navigation support

## 📸 اسکرین‌شات‌ها

### صفحه لیست محصولات
![لیست محصولات](/public/images/productListPage.png)


## 👨‍💻 توسعه‌دهنده

**امیر احمد دوانلو** — Frontend Developer

---

<div align="center">

ساخته شده برای چالش ماز

</div>