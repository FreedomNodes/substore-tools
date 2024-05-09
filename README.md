# substore-tools
## HDSD:
### #1: Tạo file script trong sub-store
Lấy link phiên bản mới nhất ở phần **Realeases**  
VD: `https://github.com/FreedomNodes/substore-tools/releases/download/1.0.0/proxy-management-lite-1.0.0.js`  

Sau đó tạo 1 file **remote** trong substore như hình bên dưới:
![](/assets/images/substore-file-1.jpg)

> [!NOTE]
> Id của file này sẽ được dùng ở bước sau.

### #2: Tạo file config trong sub-store
Tạo 1 file **local** trong substore, với format là yaml file. Tham khảo ví dụ dưới đây.  
```yaml
default:
  sni: abc.com
groups:
  name: "{F} {F:name} ({0#})"
  sorts:
    - "flag:asc"
  groupBy: flag
```
![](/assets/images/substore-file-2.jpeg)
> [!IMPORTANT]
> File config cần có id là `proxy_config`

* 2 file vừa tạo
![](/assets/images/substore-file-3.jpeg)

### #3: Tạo sub dạng collection trong sub-store
Tạo sub dạng collection với id trùng với id trong config mà mình muốn sử dụng.  
Ví dụ cần sử dụng bộ lọc `groups` như ở trên ta tạo sub dạng collection với id là `groups`.  
![](/assets/images/substore-sub-1.jpg)

Sau đó tạo 1 Script Operator **duy nhất** ở phần Node Actions để link với file script ta đã tạo ở trên với format là: `/api/file/{file id}`  
Ở ví dụ này link sẽ là `/api/file/file-management-lite` 
![](/assets/images/substore-sub-2.jpeg)

> [!TIP]
> Id của sub không bắt buộc phải trùng với id trong file config. Ta có thể chỉ định sử dụng bộ lọc nào bằng cách thêm biến `type` vào sau link file script. VD: `/api/file/file-management-lite#type=groups`
> 
### Cuối cùng là đồng bộ với app đang sử dụng 🎉

Với config trên thì ta có kết quả tương tự: 
![](/assets/images/surge-1.jpeg)

## Tham số trong file config:
| Tham số | Mô tả |
| --- | --- |
| `sni` |  |
| `name` |  |
| `sorts` |  |
| `groupBy` |  |
| `regex` |  |
| `isps` |  |
| `ports` |  |
| `ips` |  |
| `font` |  |