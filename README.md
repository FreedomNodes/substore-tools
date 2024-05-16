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

> [!WARNING]
> File config cần có `default`

![](/assets/images/substore-file-2.jpeg)

> [!IMPORTANT]
> File config cần có id là `proxy_config`

- 2 file vừa tạo
  ![](/assets/images/substore-file-3.jpeg)

### #3: Tạo sub dạng collection trong sub-store

Tạo sub dạng collection với id trùng với id trong config mà mình muốn sử dụng.
Ví dụ cần sử dụng bộ lọc `groups` như ở trên ta tạo sub dạng collection với id là `groups`.
![](/assets/images/substore-sub-1.jpg)

Sau đó tạo 1 Script Operator **duy nhất** ở phần Node Actions để link với file script ta đã tạo ở trên với format là: `/api/file/{file id}`
Ở ví dụ này link sẽ là `/api/file/proxy-management-lite`
![](/assets/images/substore-sub-2.jpeg)

> [!TIP]
> Id của sub không bắt buộc phải trùng với id trong file config. Ta có thể chỉ định sử dụng bộ lọc nào bằng cách thêm biến `type` vào sau link file script. VD: `/api/file/proxy-management-lite#type=groups`

### Cuối cùng là đồng bộ với app đang sử dụng 🎉

Với config trên thì ta có kết quả tương tự:
![](/assets/images/surge-1.jpeg)

## Tham số của bộ lọc trong file config:

| Tham số     | Ví dụ                   | Mô tả                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ----------- | ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sni`       | `abc.com`               | SNI muốn áp dụng cho bộ lọc                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `name`      | `"{F} {F:name} ({0#})"` | Name của proxy. <br> `{F}`: là cờ <br> `{F:name}`: là tên quốc gia <br>`{F:code}`: là mã quốc gia <br> `{0#}`: là số thứ tự bắt đầu bằng số 0 (có thể bỏ số 0 nếu không cần) <br> `{S:name}`: là sub name <br> `{S:0#}`: là số thứ tự của sub trong collection bắt đầu bằng số 0 (có thể bỏ số 0 nếu không cần)                                                                                                                               |
| `sorts`     | `- "flag:asc"`          | Mảng các điều kiện sort. Các điều kiện ở dưới sẽ có độ ưu tiên cao hơn <br> - **Format 1**: `"type:order"`<br> `type`: nhận giá trị `flag` hoặc `name` <br> `order`: nhận giá trị `asc` hoặc `desc` <br><br> - **Format 2**: `"type:value:order"`<br> `type`: nhận giá trị `flag` hoặc `name` <br> `name`: là giá trị trong tên của proxy muốn sort <br> `order`: nhận giá trị là `first` hoặc `last`                                         |
| `groupBy`   | `flag`                  | Group proxy theo từng quốc gia                                                                                                                                                                                                                                                                                                                                                                                                                |
| `regex`     | `/([A-Z])\w+/i`         | Lọc proxy theo tên bằng regex                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `isps`      | `- google`              | Mảng isp để proxy theo nhà cung cấp <br> `viettel`, `vnpt`, `fpt`, `google`, `gnetwork`, `akamai`                                                                                                                                                                                                                                                                                                                                             |
| `ports`     | `- 80`                  | Mảng port để lọc proxy theo port                                                                                                                                                                                                                                                                                                                                                                                                              |
| `ips`       | `- 192.168.1.0/24`      | Mảng ip để lọc proxy theo ip. Hỗ trợ các format sau: <br> `192.168.1.1` <br> `192.168.1.*` <br> `192.168.1.0/24`                                                                                                                                                                                                                                                                                                                              |
| `regions`   | `- HN`                  | Mảng giá trị lọc proxy theo khu vực. Hỗ trợ các khu vực sau: <br> `HN`: Hà Nội <br> `DN`: Đà Nẵng <br> `SG`: Hồ Chí Minh                                                                                                                                                                                                                                                                                                                      |
| `countries` | `- 🇻🇳`                  | Mảng giá trị lọc theo cờ hoặc mã các quốc gia (theo chuẩn ISO 3166-1 alpha-2 country code)                                                                                                                                                                                                                                                                                                                                                    |
| `subs`      | `- "sub-1"`             | Mảng giá trị lọc proxy theo sub name                                                                                                                                                                                                                                                                                                                                                                                                          |
| `tags`      | `- master`              | Mảng giá trị lọc proxy theo tag name                                                                                                                                                                                                                                                                                                                                                                                                          |
| `types`     | `- vmess`               | Mảng giá trị lọc proxy theo loại (`vmess`, `trojan`,...)                                                                                                                                                                                                                                                                                                                                                                                      |
| `font`      | `type: circle-regular`  | Thay đổi font của proxy <br> `type: circle-regular`: đổi font cả tên và số <br> `num: circle-regular`: chỉ đổi font số <br><br> Các font hỗ trợ: `serif-bold`, `serif-italic`, `serif-bold-italic`, `sans-serif-regular`, `sans-serif-bold`, `sans-serif-italic`, `sans-serif-bold-italic`, `script-regular`, `script-bold`, `fraktur-regular`, `fraktur-bold`, `monospace-regular`, `double-struck-bold`, `circle-regular`, `square-regular` |
