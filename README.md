<br />
<div align="center">
  <a href="https://github.com/FreedomNodes/substore-tools">
    <img src="assets/images/logo.png" alt="Logo" width="120" height="100">
  </a>

  <h3 align="center">Sub-Store ToolKit</h3>

  <p align="center">
    An awesome sub-store tool for proxy management
    <br />
    <a href="https://github.com/FreedomNodes/substore-tools/wiki"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/FreedomNodes/substore-tools/wiki/H%C6%B0%E1%BB%9Bng-d%E1%BA%ABn-c%C3%A0i-%C4%91%E1%BA%B7t">View Demo</a>
    ·
    <a href="https://github.com/FreedomNodes/substore-tools/issues/new?labels=bug">Report Bug</a>
    ·
    <a href="https://github.com/FreedomNodes/substore-tools/issues/new?labels=enhancement,feature-request">Request Feature</a>
  </p>
</div>

## 📚 Proxy Management

### ⚙️ Tham số của bộ lọc

| Tham số     | Ví dụ                   | Mô tả                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ----------- | ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sni`       | `abc.com`               | SNI muốn áp dụng cho bộ lọc                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `name`      | `"{F} {F:name} ({0#})"` | Name của proxy. <br> `{F}`: là cờ <br> `{F:name}`: là tên quốc gia <br>`{F:code}`: là mã quốc gia <br> `{0#}`: là số thứ tự bắt đầu bằng số 0 (có thể bỏ số 0 nếu không cần) <br> `{S:name}`: là sub name <br> `{S:0#}`: là số thứ tự của sub trong collection bắt đầu bằng số 0 (có thể bỏ số 0 nếu không cần) <br> `{port}`: là port của proxy                                                                                                                              |
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
| `transports`     | `- ws`               | Mảng giá trị lọc proxy theo transfer protocol (`ws`, `wss`, `grpc`,`tls`)                                                                                                                                                                                                                                                                                                                                                                                      |
| `font`      | `type: circle-regular`  | Thay đổi font của proxy <br> `type: circle-regular`: đổi font cả tên và số <br> `num: circle-regular`: chỉ đổi font số <br><br> Các font hỗ trợ: `serif-bold`, `serif-italic`, `serif-bold-italic`, `sans-serif-regular`, `sans-serif-bold`, `sans-serif-italic`, `sans-serif-bold-italic`, `script-regular`, `script-bold`, `fraktur-regular`, `fraktur-bold`, `monospace-regular`, `double-struck-bold`, `circle-regular`, `square-regular` |

### 🛠️ Cấu hình bộ lọc
Tạo file config như trong phần hướng dẫn [link](https://github.com/FreedomNodes/substore-tools/wiki/H%C6%B0%E1%BB%9Bng-d%E1%BA%ABn-c%C3%A0i-%C4%91%E1%BA%B7t)

```yml
default:
  sni: abc.com
```

#### Cài đặt SNI cho bộ lọc
```yml
default:
  sni: abc.com
groupA:
  sni: xyz.com
```
Nếu bộ lọc không cài đặt SNI thì sẽ lấy SNI ở `default`

#### Thay đổi tên cho proxy
```yml
default:
  sni: abc.com
groupA:
  name: "{F} {F:name} ({0#})"
```

#### Sắp xếp proxy
Ví dụ muốn sắp xếp proxy theo cờ với thứ tự tăng dần
```yml
default:
  sni: abc.com
groupA:
  sorts: "flag:asc"
```

#### Nhóm proxy theo cờ
Ví dụ muốn đánh số thứ tự theo từng nhóm nước khác nhau
```yml
default:
  sni: abc.com
groupA:
  name: "{F} {F:name} ({0#})"
  groupBy: flag
```

#### Lọc proxy theo tên bằng regex
Ví dụ muốn lọc các proxy có số từ 01 đến 09
```yml
default:
  sni: abc.com
groupA:
  regex: /0[1-9]/i
```

#### Lọc proxy theo ISP
Ví dụ muốn lọc các proxy được cung cấp bởi Google
```yml
default:
  sni: abc.com
groupA:
  isps: [google]
```

#### Lọc proxy theo port
Ví dụ muốn lọc proxy theo port 80 và port 443
```yml
default:
  sni: abc.com
groupA:
  ports: [80, 443]
```
hoặc lọc proxy theo port từ 30000 đến 50000
```yml
default:
  sni: abc.com
groupA:
  ports: [30000..50000]
```

#### Lọc proxy theo IP
```yml
default:
  sni: abc.com
groupA:
  ips: [192.168.1.0/24]
```

#### Lọc proxy theo khu vực
Ví dụ muốn lọc proxy theo khu vực Hà Nội
```yml
default:
  sni: abc.com
groupA:
  regions: [HN]
```

#### Lọc proxy theo quốc gia
Ví dụ muốn lọc proxy theo quốc gia Việt Nam và Singapore
```yml
default:
  sni: abc.com
groupA:
  countries: [🇻🇳, SG]
```

#### Lọc proxy theo tên sub
Ví dụ muốn lọc proxy theo sub có tên là `subNameA`
```yml
default:
  sni: abc.com
groupA:
  subs: [subNameA]
```

#### Lọc proxy theo tag
Ví dụ muốn lọc proxy theo tag có tên là `master`
```yml
default:
  sni: abc.com
groupA:
  tags: [master]
```

#### Lọc proxy theo loại
Ví dụ muốn lọc proxy `vmess`
```yml
default:
  sni: abc.com
groupA:
  types: [vmess]
```

#### Lọc proxy theo protocol
Ví dụ muốn lọc proxy `grpc`
```yml
default:
  sni: abc.com
groupA:
  transports: [grpc]
```

#### Bật chế độ DNS Lookup
Mặc định sẽ không phân giải tên miền, nếu muốn phân giải tên miền ra IP thì sẽ config ở `default` như sau:
```yml
default:
  sni: abc.com
  dnsLookup: true
```
hoặc muốn chỉ phân giải tên miền với kiểu proxy vmess thì sẽ config như sau:
```yml
default:
  sni: abc.com
  dnsLookup:
    types: [vmess]
```
Các điều kiện khác làm tương tự.

## 📚 Subscription Converter (updating)
Module Subscription Converter hiện đã hỗ trợ các app: Surge, Loon, Stash, Egern, Shadowrocket, Sing-Box, Clash, Surfboard, V2Ray/V2Box
