export const useBreadcrumbs = () => {
    const route = useRoute()

    return computed(() => {
        const crumbs: { label: string; to: string | null }[] = []

        route.matched.forEach((record, index, array) => {
            if (record.meta.breadcrumb && typeof record.meta.breadcrumb === 'object') {
                const meta = record.meta.breadcrumb as { label: string }

                const isLast = index === array.length - 1

                crumbs.push({
                    label: meta.label,
                    to: isLast ? null : record.path
                })
            }
        })

        return crumbs
    })
}