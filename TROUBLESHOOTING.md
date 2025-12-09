# Troubleshooting Guide

## Services Not Showing on Frontend

### Issue: Services created in Filament but not visible on frontend

### Common Causes & Solutions:

1. **Service Not Published**
   - The API only returns services where `is_published = true`
   - **Solution**: In Filament admin panel, edit your service and toggle the "Published" switch to ON
   - Or run: `php artisan tinker` then `Service::where('is_published', false)->update(['is_published' => true]);`

2. **API URL Not Configured**
   - Check if `.env` file has `VITE_API_URL=http://localhost:8000/api/v1`
   - **Solution**: 
     - Create/update `.env` file in project root
     - Add: `VITE_API_URL=http://localhost:8000/api/v1`
     - Restart frontend dev server: `npm run dev`

3. **Backend Not Running**
   - Make sure Laravel backend is running
   - **Solution**: Run `cd backend && php artisan serve`
   - Backend should be at `http://localhost:8000`

4. **CORS Issues**
   - Check browser console for CORS errors
   - **Solution**: Make sure backend allows requests from frontend origin

5. **Check Browser Console**
   - Open browser DevTools (F12)
   - Check Console tab for errors
   - Check Network tab to see if API requests are being made

### Quick Debug Steps:

1. **Check if services are published:**
   ```bash
   cd backend
   php artisan tinker
   # Then run:
   Service::where('is_published', true)->count()
   ```

2. **Test API directly:**
   ```bash
   curl http://localhost:8000/api/v1/services
   ```

3. **Check frontend console:**
   - Open browser DevTools
   - Look for console.log messages showing fetched data
   - Check for any error messages

4. **Verify .env file:**
   ```bash
   cat .env | grep VITE_API_URL
   ```

### For All Resources (Projects, Resources, Services, etc.):

**IMPORTANT**: All resources must have `is_published = true` to appear on the frontend!

- ✅ Published = Visible on frontend
- ❌ Not Published = Hidden from frontend (only visible in admin panel)

### Restart Required:

After updating `.env` file, you MUST restart the frontend dev server:
```bash
# Stop the current server (Ctrl+C)
# Then restart:
npm run dev
```

