echo "Building UI..."
ng build
echo "Restarting Nginx Server"
sudo systemctl restart nginx.service
