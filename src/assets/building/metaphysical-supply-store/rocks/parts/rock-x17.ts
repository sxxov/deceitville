import rock_x17_bin from './rock-x17.bin?url';

export default {
	"asset": {
		"generator": "Khronos glTF Blender I/O v3.6.27",
		"version": "2.0"
	},
	"extensionsUsed": [
		"KHR_draco_mesh_compression",
		"KHR_materials_transmission",
		"KHR_materials_ior"
	],
	"extensionsRequired": [
		"KHR_draco_mesh_compression"
	],
	"scene": 0,
	"scenes": [
		{
			"name": "Scene",
			"nodes": [
				0
			]
		}
	],
	"nodes": [
		{
			"mesh": 0,
			"name": "rock.018",
			"rotation": [
				0.053662918508052826,
				-0.4569557011127472,
				0.7159953117370605,
				0.5250357389450073
			],
			"translation": [
				0.6947086453437805,
				0.38764670491218567,
				-0.6718729734420776
			]
		}
	],
	"materials": [
		{
			"doubleSided": true,
			"extensions": {
				"KHR_materials_transmission": {
					"transmissionFactor": 1
				},
				"KHR_materials_ior": {
					"ior": 1.4500000476837158
				}
			},
			"name": "Material.001",
			"pbrMetallicRoughness": {
				"baseColorFactor": [
					0.8394935727119446,
					0.8394935727119446,
					0.8394935727119446,
					1
				],
				"metallicFactor": 0.921450138092041,
				"roughnessFactor": 0.17824772000312805
			}
		}
	],
	"meshes": [
		{
			"name": "rock.018",
			"primitives": [
				{
					"attributes": {
						"POSITION": 0,
						"NORMAL": 1,
						"TEXCOORD_0": 2
					},
					"extensions": {
						"KHR_draco_mesh_compression": {
							"bufferView": 0,
							"attributes": {
								"POSITION": 0,
								"NORMAL": 1,
								"TEXCOORD_0": 2
							}
						}
					},
					"indices": 3,
					"material": 0,
					"mode": 4
				}
			]
		}
	],
	"accessors": [
		{
			"componentType": 5126,
			"count": 318,
			"max": [
				0.36376696825027466,
				0.5375847220420837,
				0.437055379152298
			],
			"min": [
				-0.35122358798980713,
				-0.5455502271652222,
				-0.38257622718811035
			],
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 318,
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 318,
			"type": "VEC2"
		},
		{
			"componentType": 5123,
			"count": 864,
			"type": "SCALAR"
		}
	],
	"bufferViews": [
		{
			"buffer": 0,
			"byteLength": 3277,
			"byteOffset": 0
		}
	],
	"buffers": [
		{
			"byteLength": 3280,
			"uri": rock_x17_bin
		}
	]
}